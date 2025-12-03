import type { Topic } from './curriculum';

export const curriculumTree_BURGDORF_28E_GYM2: Topic = {
  id: 'root',
  title: 'Start',
  icon: '🏠',
  description: 'Willkommen',
  level: 1,
  children: [
    {
      id: 'bigdata',
      title: 'Big Data',
      icon: '📊',
      description: 'Einführung in die Welt der grossen Daten',
      level: 2,
      children: [
        {
          id: 'bigdata-part1',
          title: 'Was ist Big Data?',
          icon: '💡',
          description: 'Grundlagen und Bedeutung von Big Data',
          level: 3,
          content: 'BigDataPart1',
        },
        {
          id: 'bigdata-part2',
          title: 'Wie speichert man Daten im grossen Stil?',
          icon: '💾',
          description: 'Speichertechnologien und Architekturen für Big Data',
          level: 3,
          content: 'BigDataPart2',
        },
      ],
    },
  ],
};
