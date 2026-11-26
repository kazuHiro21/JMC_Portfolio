import { useCallback, useRef } from 'react';

export default function usePointerTilt(maxAngle = 4) {
  const ref = useRef(null);

  const onPointerMove = useCallback((event) => {
    if (event.pointerType !== 'mouse' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const element = ref.current;
    if (!element) return;
    const bounds = element.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    element.style.setProperty('--tilt-x', `${(-y * maxAngle).toFixed(2)}deg`);
    element.style.setProperty('--tilt-y', `${(x * maxAngle).toFixed(2)}deg`);
  }, [maxAngle]);

  const onPointerLeave = useCallback(() => {
    ref.current?.style.setProperty('--tilt-x', '0deg');
    ref.current?.style.setProperty('--tilt-y', '0deg');
  }, []);

  return { ref, onPointerMove, onPointerLeave };
}
