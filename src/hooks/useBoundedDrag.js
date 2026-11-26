import { useCallback, useRef } from 'react';

export default function useBoundedDrag({ maxX = 42, maxY = 34 } = {}) {
  const ref = useRef(null);
  const drag = useRef(null);
  const xLimit = useCallback((element) => {
    const stage = element.closest('.lanyard-stage');
    if (!stage) return maxX;
    const available = (stage.clientWidth - element.offsetWidth) / 2 - 4;
    return Math.max(0, Math.min(maxX, available));
  }, [maxX]);

  const update = useCallback((element, x, y) => {
    element.style.setProperty('--drag-x', `${x}px`);
    element.style.setProperty('--drag-y', `${y}px`);

    const stage = element.closest('.lanyard-stage');
    const clip = stage?.querySelector('.lanyard-clip');
    clip?.style.setProperty('--drag-x', `${x}px`);
    clip?.style.setProperty('--drag-y', `${y}px`);
    const paths = stage?.querySelectorAll('.lanyard-strap-line, .lanyard-strap-detail');
    if (!stage || !paths?.length) return;

    const stageBounds = stage.getBoundingClientRect();
    const endX = 50 + (x / stageBounds.width) * 100;
    const cardDrop = element.closest('.lanyard-card-drop');
    const endY = (((cardDrop?.offsetTop || 0) + y) / stageBounds.height) * 100;
    const controlX = 50 + ((endX - 50) * 0.55);
    const controlY = Math.max(8, endY * 0.55);
    const pathData = `M50 0 C50 ${controlY * 0.55}, ${controlX} ${controlY}, ${endX} ${endY}`;
    paths.forEach((path) => path.setAttribute('d', pathData));
  }, []);

  const onPointerDown = useCallback((event) => {
    if (event.button !== 0) return;
    const element = ref.current;
    if (!element) return;
    drag.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      x: Number.parseFloat(element.style.getPropertyValue('--drag-x')) || 0,
      y: Number.parseFloat(element.style.getPropertyValue('--drag-y')) || 0,
    };
    element.classList.add('is-dragging');
    element.setPointerCapture(event.pointerId);
  }, []);

  const onPointerMove = useCallback((event) => {
    const element = ref.current;
    const origin = drag.current;
    if (!element || !origin || event.pointerId !== origin.pointerId) return;
    const limitX = xLimit(element);
    const x = Math.max(-limitX, Math.min(limitX, origin.x + event.clientX - origin.startX));
    const y = Math.max(-maxY, Math.min(maxY, origin.y + event.clientY - origin.startY));
    update(element, x, y);
  }, [maxY, update, xLimit]);

  const stopDragging = useCallback((event) => {
    if (!drag.current || event.pointerId !== drag.current.pointerId) return;
    drag.current = null;
    ref.current?.classList.remove('is-dragging');
  }, []);

  const onKeyDown = useCallback((event) => {
    const element = ref.current;
    if (!element) return;
    const currentX = Number.parseFloat(element.style.getPropertyValue('--drag-x')) || 0;
    const currentY = Number.parseFloat(element.style.getPropertyValue('--drag-y')) || 0;
    const step = event.shiftKey ? 12 : 4;
    const limitX = xLimit(element);
    const changes = {
      ArrowLeft: [-step, 0], ArrowRight: [step, 0],
      ArrowUp: [0, -step], ArrowDown: [0, step],
    };
    const change = changes[event.key];
    if (!change) return;
    event.preventDefault();
    update(
      element,
      Math.max(-limitX, Math.min(limitX, currentX + change[0])),
      Math.max(-maxY, Math.min(maxY, currentY + change[1])),
    );
  }, [maxY, update, xLimit]);

  return { ref, onPointerDown, onPointerMove, onPointerUp: stopDragging, onPointerCancel: stopDragging, onLostPointerCapture: stopDragging, onKeyDown };
}
