export const projects = [
  {
    id: 1,
    title: 'C++ Game Prototype',
    description: 'A small 2D game prototype built in C++ with SDL2. Focused on clean memory management using Valgrind and Conan for dependency handling.',
    image: '/images/projects/game-prototype.png',
    github: 'https://github.com/junmiguelcorbilla/game-prototype',
    live: null,
    tech: ['C++', 'SDL2', 'Conan', 'Valgrind', 'Ubuntu'],
  },
  {
    id: 2,
    title: 'React Task Dashboard',
    description: 'Frontend dashboard for task management built with React and Tailwind. Responsive layout with dark mode support.',
    image: '/images/projects/task-dashboard.png',
    github: 'https://github.com/junmiguelcorbilla/task-dashboard',
    live: null,
    tech: ['React', 'JavaScript', 'Tailwind CSS'],
  },
  {
    id: 3,
    title: 'Python File Encryptor',
    description: 'CLI tool written in Python to encrypt and decrypt files using AES. Includes Dockerfile for containerized runs.',
    image: '/images/projects/file-encryptor.png',
    github: 'https://github.com/junmiguelcorbilla/file-encryptor',
    live: null,
    tech: ['Python', 'Docker', 'CLI'],
  },
  {
    id: 4,
    title: 'Java Data Structures Library',
    description: 'Implementation of common data structures (linked list, stack, queue, binary tree) in Java with unit tests.',
    image: '/images/projects/java-ds.png',
    github: 'https://github.com/junmiguelcorbilla/java-ds',
    live: null,
    tech: ['Java', 'JUnit'],
  },
];

export default projects;
