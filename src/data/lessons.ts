/**
 * Lessons focused on articles only: one object per image,
 * two questions — what we see (noun) and which article (a / the).
 */
export interface LessonOption {
  value: string;
  explanation: string;
}

export interface LessonPart {
  question: string;
  options: LessonOption[];
}

export interface Lesson {
  id: string;
  imageUrl: string;
  imageAlt: string;
  objectWord: string;
  /** Correct article for this image (used for validation). */
  correctArticle: "A" | "The";
  /** Only two parts: [0] What are we seeing (noun), [1] How many? (article). */
  parts: LessonPart[];
}

/** Article-focused lessons. Each image = one object. */
export const lessons: Lesson[] = [
  {
    id: "cat",
    imageUrl: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600",
    imageAlt: "A cat",
    objectWord: "cat",
    correctArticle: "A",
    parts: [
      {
        question: "What are we seeing?",
        options: [
          { value: "cat", explanation: "We see one animal: a cat." },
          { value: "dog", explanation: "We see one animal: a dog." },
        ],
      },
      {
        question: "How many? Which article?",
        options: [
          {
            value: "A",
            explanation: "Use \"a\" when you see one thing and it is not specific. Example: one cat.",
          },
          {
            value: "The",
            explanation: "Use \"the\" when everyone knows which one. Example: the cat we saw yesterday.",
          },
        ],
      },
    ],
  },
  {
    id: "boy",
    imageUrl: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600",
    imageAlt: "A boy",
    objectWord: "boy",
    correctArticle: "A",
    parts: [
      {
        question: "What are we seeing?",
        options: [
          { value: "boy", explanation: "We see one person: a boy." },
          { value: "girl", explanation: "We see one person: a girl." },
        ],
      },
      {
        question: "How many? Which article?",
        options: [
          {
            value: "A",
            explanation: "Use \"a\" when you see one person and it is not specific. Example: a boy.",
          },
          {
            value: "The",
            explanation: "Use \"the\" when everyone knows which one. Example: the boy from our class.",
          },
        ],
      },
    ],
  },
  {
    id: "book",
    imageUrl: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600",
    imageAlt: "A book",
    objectWord: "book",
    correctArticle: "The",
    parts: [
      {
        question: "What are we seeing?",
        options: [
          { value: "book", explanation: "We see one thing: a book." },
          { value: "box", explanation: "We see one thing: a box." },
        ],
      },
      {
        question: "How many? Which article?",
        options: [
          {
            value: "A",
            explanation: "Use \"a\" when you see one thing and it is not specific. Example: a book.",
          },
          {
            value: "The",
            explanation: "Use \"the\" when everyone knows which one. Example: the book on the table.",
          },
        ],
      },
    ],
  },
];
