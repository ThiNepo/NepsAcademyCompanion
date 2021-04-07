chrome.runtime.onMessage.addListener(onButtonClicked);
chrome.runtime.sendMessage({ isPageLoaded: 1 });

async function onButtonClicked() {
    const url = document.URL;

    if (isExercise(url)) parseExercise(batchIdGenerator(), 1);
    else if (isCompetition(url)) await parseCompetition();
}
