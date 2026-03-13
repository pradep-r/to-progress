/**
 * Lessons focused on articles only: one object per image,
 * two questions — what we see (noun) and which article (a / the).
 */
export interface LessonOption {
  value: string;
  meaning: string;
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
  // correctArticle: "A" | "The";
  /** Only two parts: [0] What are we seeing (noun), [1] How many? (article). */
  parts: LessonPart[];
}

// todo
// Is this the first time we are seeing it?
// Is it specific?
// Is there only one?

/** Article-focused lessons. Each image = one object. */
export const lessons: Lesson[] = [
  {
    id: "cat",
    imageUrl:
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600",
    imageAlt: "Cat sitting on a sofa",
    objectWord: "cat",
    parts: [
      {
        question: "How many cats are  you seeing? is it one or many",
        options: [
          {
            value: "one",
            meaning: "If you are seeing one single cat.",
          },
          {
            value: "many",
            meaning: "If you are seeing more than one cat.",
          },
        ],
      },
      {
        question:
          "Can your listener picture exactly which cat/cats you mean — is there only one in their mind?",
        options: [
          {
            value: "yes",
            meaning: "Your listener can picture exactly which one.",
          },
          {
            value: "no",
            meaning:
              "Your listener cannot picture exactly which one.",
          },
        ],
      },
    ],
  },
];
