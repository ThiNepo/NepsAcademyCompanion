import {
  DEFAULT_PROBLEM_DATA,
  ERROR_MESSAGES,
  RUNTIME_MESSAGE_TYPES,
} from "./utils/constants";
import { getNewBatch, getNormalizedName } from "./utils/functions";

export function parseExercise() {
  const name = getNormalizedName(document.title.replace(" | Neps Academy", ""));
  const url = document.URL;
  const timeAndMemoryLimits = getTimeAndMemoryLimits();
  const tests = getTestCases();
  const batch = getNewBatch();

  const problemData = {
    name,
    tests,
    batch,
    url,
    ...timeAndMemoryLimits,
    ...DEFAULT_PROBLEM_DATA,
  };

  chrome.runtime.sendMessage({
    type: RUNTIME_MESSAGE_TYPES.PROBLEM_DATA,
    problemData,
  });
}

function getTestCases() {
  const tests = [];
  const tables = document.getElementsByClassName("table-column");

  for (let i = 0; i < tables.length; i += 2) {
    const input = getTestCaseTextFromTableIndex(i, tables);
    const output = getTestCaseTextFromTableIndex(i + 1, tables);
    tests.push({ input, output });
  }

  return tests;
}

function getTimeAndMemoryLimits() {
  const card = document.getElementsByClassName("exercise-submition-card")[0];
  if (!card) throw new Error(ERROR_MESSAGES.WEBSITE_NOT_SUPPORTED);

  const paragraphs = card.getElementsByTagName("p");
  let timeLimit, memoryLimit;

  for (const paragraph of paragraphs) {
    if (paragraph.firstChild.textContent == "Tempo Limite:")
      timeLimit = getTimeLimitFromParagraph(paragraph);
    else if (paragraph.firstChild.textContent == "Limite de Memória:")
      memoryLimit = getMemoryLimitFromParagraph(paragraph);
  }

  return { timeLimit, memoryLimit };
}

function getTestCaseTextFromTableIndex(index, tables) {
  const table = tables[index];
  const div = table.getElementsByTagName("div")[0];
  return getTestCaseTextFromDiv(div);
}

function getTestCaseTextFromDiv(div) {
  let text = "";
  for (const child of div.childNodes) {
    if (child.nodeName != "#text") continue;
    text += child.textContent.trim();
    text += "\n";
  }
  return text.trim();
}

function getTimeLimitFromParagraph(paragraph) {
  const timeLimitString = paragraph.childNodes[1].textContent
    .trim()
    .replace(" second(s)", "")
    .replace(",", ".");

  return parseFloat(timeLimitString) * 1000;
}

function getMemoryLimitFromParagraph(paragraph) {
  const memoryLimitString = paragraph.childNodes[1].textContent
    .trim()
    .replace(" mb", "");

  return parseFloat(memoryLimitString);
}
