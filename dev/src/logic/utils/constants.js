export const RUNTIME_MESSAGE_TYPES = {
  BUTTON_CLICKED: 1,
  PROBLEM_DATA: 2,
};

export const ERROR_MESSAGES = {
  NOT_SUPPORTED_WEBSITE: "Website not suported!",
};

export const DEFAULT_PROBLEM_DATA = {
  group: "Neps Academy",
  interactive: false,
  testType: "single",
  input: { type: "stdin" },
  output: { type: "stdout" },
  languages: {
    java: { mainClass: "Main", taskClass: "MainClass" },
  },
};
