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
        question:
          "Do you want to speak about this cat which your listener already has a reference in their mind?",
        options: [
          {
            value: "Yes",
            meaning:
              "You want to speak about this specific cat and your listener can mentally refer exactly this cat - because you mentioned it before, the situation makes it clear, or you both share the same context.",
          },
          {
            value: "No",
            meaning:
              "You want to speak about this cat for the first time - your listener has no specific mental reference for it yet.",
          },
        ],
      },
    ],
  },
];
