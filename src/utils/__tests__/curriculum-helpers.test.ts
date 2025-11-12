import { describe, it, expect } from 'vitest';
import { findTopicById, findParentTopicId } from '../curriculum-helpers';
import type { Topic } from '@/types/curriculum';

// Mock curriculum for testing
const mockCurriculum: Topic = {
  id: 'root',
  title: 'Kryptographie',
  icon: '🔐',
  description: 'Root topic',
  level: 0,
  children: [
    {
      id: 'topic1',
      title: 'Topic 1',
      icon: '📝',
      description: 'First topic',
      level: 1,
      children: [
        {
          id: 'topic1-1',
          title: 'Subtopic 1.1',
          icon: '📄',
          description: 'First subtopic',
          level: 2,
        },
        {
          id: 'topic1-2',
          title: 'Subtopic 1.2',
          icon: '📄',
          description: 'Second subtopic',
          level: 2,
        },
      ],
    },
    {
      id: 'topic2',
      title: 'Topic 2',
      icon: '📝',
      description: 'Second topic',
      level: 1,
    },
  ],
};

describe('curriculum-helpers', () => {
  describe('findTopicById', () => {
    it('should find root topic', () => {
      const result = findTopicById(mockCurriculum, 'root');
      expect(result).toBeDefined();
      expect(result?.id).toBe('root');
    });

    it('should find top-level topic', () => {
      const result = findTopicById(mockCurriculum, 'topic1');
      expect(result).toBeDefined();
      expect(result?.id).toBe('topic1');
      expect(result?.title).toBe('Topic 1');
    });

    it('should find nested topic', () => {
      const result = findTopicById(mockCurriculum, 'topic1-1');
      expect(result).toBeDefined();
      expect(result?.id).toBe('topic1-1');
      expect(result?.title).toBe('Subtopic 1.1');
    });

    it('should return null for non-existent topic', () => {
      const result = findTopicById(mockCurriculum, 'non-existent');
      expect(result).toBeNull();
    });
  });

  describe('findParentTopicId', () => {
    it('should return null for root topic', () => {
      const result = findParentTopicId(mockCurriculum, 'root');
      expect(result).toBeNull();
    });

    it('should find parent of top-level topic', () => {
      const result = findParentTopicId(mockCurriculum, 'topic1');
      expect(result).toBe('root');
    });

    it('should find parent of nested topic', () => {
      const result = findParentTopicId(mockCurriculum, 'topic1-1');
      expect(result).toBe('topic1');
    });

    it('should return null for non-existent topic', () => {
      const result = findParentTopicId(mockCurriculum, 'non-existent');
      expect(result).toBeNull();
    });
  });
});
