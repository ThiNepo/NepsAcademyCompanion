chrome.browserAction.onClicked.addListener(buttonClicked);
chrome.runtime.onMessage.addListener(receiver);

function buttonClicked(tab) {
    chrome.tabs.sendMessage(tab.id, {});
}

function receiver(message) {
    if (message.isExerciseData) sendJson(message.exerciseData);
    else if (message.isPageLoaded) console.log("Carregou");
}

function sendJson(cphData) {
    chrome.extension.getBackgroundPage().console.log(cphData);
    return new Promise((resolve) => {
        const xhr = new XMLHttpRequest();
        xhr.open("POST", `http://localhost:27121/`, true);
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.timeout = 5000;

        xhr.onload = () => resolve();
        xhr.ontimeout = () => resolve();
        xhr.onabort = () => resolve();
        xhr.onerror = () => resolve();
        try {
            xhr.send(JSON.stringify(cphData));
            chrome.extension.getBackgroundPage().console.log(xhr);
        } catch (err) {
            chrome.extension.getBackgroundPage().console.log(err);
        }
    });
}
