import "./styles/style.css";
import type { Lesson, LessonPart, LessonOption } from "./data/lessons";
import { lessons } from "./data/lessons";

const sentenceDisplay = document.getElementById(
  "sentence-display",
) as HTMLDivElement;
const lessonImage = document.getElementById("lesson-image") as HTMLImageElement;
const questionsContainer = document.getElementById(
  "questions-container",
) as HTMLDivElement;
const answerSection = document.getElementById("answer-section") as HTMLElement;
const validationMessage = document.getElementById(
  "validation-message",
) as HTMLParagraphElement;
const pronounceBtn = document.getElementById(
  "pronounce-btn",
) as HTMLButtonElement;
const prevBtn = document.getElementById("prev-btn") as HTMLButtonElement;
const nextBtn = document.getElementById("next-btn") as HTMLButtonElement;
const lessonCounter = document.getElementById(
  "lesson-counter",
) as HTMLSpanElement;

let currentLessonIndex = 0;
let currentLesson: Lesson | null = null;
const chosenParts: string[] = [];

function loadLesson(lesson: Lesson, index: number): void {
  currentLesson = lesson;
  currentLessonIndex = index;
  chosenParts.length = 0;

  lessonImage.src = lesson.imageUrl;
  lessonImage.alt = lesson.imageAlt;
  lessonImage.loading = "lazy";

  updateSentenceDisplay();
  renderQuestions(lesson.parts);
  updateQuestionVisibility();
  // updateLessonCounter();
  // updateNavButtons();
  // pronounceBtn.setAttribute(
  //   "aria-label",
  //   `Listen to the word "${lesson.objectWord}"`,
  // );
}

function buildSentence(): string {
  if (!currentLesson || chosenParts.length === 0) return "";
  // Articles only: order is article (part 1) + noun (part 0).

  // const objectCountStatus = chosenParts[0];
  const objectKnownStatus = chosenParts[0];
  if (objectKnownStatus === "No") {
    return `A ${currentLesson.objectWord}`;
  } else {
    return `The ${currentLesson.objectWord}`;
  }
}

function updateSentenceDisplay(): void {
  const text = buildSentence();
  sentenceDisplay.innerText = text || "";
}

/** Show question i only if all previous questions are answered; show answer section when all answered. */
function updateQuestionVisibility(): void {
  if (!currentLesson) return;
  const parts = currentLesson.parts;
  const blocks = questionsContainer.querySelectorAll(".question-block");
  blocks.forEach((block, i) => {
    const visible = i === 0 || chosenParts[i - 1] !== undefined;
    (block as HTMLElement).hidden = !visible;
  });
  const allAnswered =
    parts.length > 0 && parts.every((_, i) => chosenParts[i] !== undefined);
  answerSection.hidden = !allAnswered;
  if (allAnswered) {
    updateValidation();
  }
}

function updateValidation(): void {
  if (!currentLesson || !validationMessage) return;
  const noun = chosenParts[0];
  const article = chosenParts[1];
}

function renderQuestions(parts: LessonPart[]): void {
  questionsContainer.innerHTML = "";

  parts.forEach((part, index) => {
    const wrapper = document.createElement("div");
    wrapper.className = "question-block";
    wrapper.setAttribute("data-part-index", String(index));

    const label = document.createElement("p");
    label.className = "question-label";
    label.textContent = part.question;

    const optionsDiv = document.createElement("div");
    optionsDiv.className = "question-options";

    part.options.forEach((opt: LessonOption) => {
      const optionItem = document.createElement("div");
      optionItem.className = "option-item";

      const button = document.createElement("button");
      button.type = "button";
      button.className = "option-btn";
      button.textContent = opt.value;
      button.addEventListener("click", () => {
        choosePart(index, opt, wrapper);
      });

      const explanationEl = document.createElement("p");
      explanationEl.className = "option-explanation";
      explanationEl.textContent = opt.meaning;

      const divider = document.createElement("div");
      divider.className = "option-divider";

      optionItem.appendChild(button);
      optionItem.appendChild(explanationEl);
      optionItem.appendChild(divider);

      optionsDiv.appendChild(divider);
      optionsDiv.appendChild(optionItem);
    });

    wrapper.appendChild(label);
    wrapper.appendChild(optionsDiv);
    questionsContainer.appendChild(wrapper);
  });
}

function choosePart(
  partIndex: number,
  option: LessonOption,
  wrapper: HTMLDivElement,
): void {
  chosenParts[partIndex] = option.value;
  updateSentenceDisplay();
  updateQuestionVisibility();

  wrapper.classList.add("answered");

  // Update chosen state: only the clicked option is chosen; options stay clickable
  const buttons = wrapper.querySelectorAll(".option-btn");
  buttons.forEach((btn) => {
    const b = btn as HTMLButtonElement;
    if (b.textContent === option.value) {
      b.classList.add("chosen");
    } else {
      b.classList.remove("chosen");
    }
  });
}

// function updateLessonCounter(): void {
//   lessonCounter.textContent = `${currentLessonIndex + 1} / ${lessons.length}`;
// }

function pronounceObject(): void {
  if (!currentLesson) return;
  const word = currentLesson.objectWord;
  if (!word) return;
  const utterance = new SpeechSynthesisUtterance(buildSentence());
  utterance.lang = "en-US";
  utterance.rate = 0.9;
  speechSynthesis.cancel();
  speechSynthesis.speak(utterance);
}

// Event listeners
pronounceBtn.addEventListener("click", pronounceObject);

// Start with the first lesson
loadLesson(lessons[0]!, 0);
