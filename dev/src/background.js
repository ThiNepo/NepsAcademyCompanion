import { sendProblemData } from "./logic/dataSender";
import { RUNTIME_MESSAGE_TYPES } from "./logic/utils";

chrome.browserAction.onClicked.addListener(onButtonClicked);
chrome.runtime.onMessage.addListener(onMessageReceived);

function onButtonClicked(activeTab) {
  chrome.tabs.sendMessage(activeTab.id, {
    type: RUNTIME_MESSAGE_TYPES.BUTTON_CLICKED,
  });
}

function onMessageReceived(message) {
  switch (message.type) {
    case RUNTIME_MESSAGE_TYPES.PROBLEM_DATA:
      sendProblemData(message.problemData);
      break;
  }
}
