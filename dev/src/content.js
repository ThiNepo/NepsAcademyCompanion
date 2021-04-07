import { parseExercise } from "./logic/exerciseParser";
import { ERROR_MESSAGES, RUNTIME_MESSAGE_TYPES } from "./logic/utils/constants";
import { isExercise } from "./logic/utils/functions";

chrome.runtime.onMessage.addListener(onMessageReceived);

function onMessageReceived(message) {
  switch (message.type) {
    case RUNTIME_MESSAGE_TYPES.BUTTON_CLICKED:
      onButtonClicked();
      break;
  }
}

function onButtonClicked() {
  const url = document.URL;
  try {
    if (isExercise(url)) parseExercise();
    else throw new Error(ERROR_MESSAGES.NOT_SUPPORTED_WEBSITE);
  } catch (error) {
    console.log(error.message);
  }
}
