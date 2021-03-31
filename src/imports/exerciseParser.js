function parseExercise(batchId, batchSize) {
    const name = getNormalizedName(document.title.replace(" | Neps Academy", ""));
    const url = document.URL;
    const timeAndMemoryLimits = getTimeAndMemoryLimits();
    const tests = getTestCases();

    const exerciseData = {
        name, ...timeAndMemoryLimits, tests,
        batchId, batchSize, url, ...defaultCphData
    };

    chrome.runtime.sendMessage({ isExerciseData: 1, exerciseData });
}

function getTestCases() {
    let current_type = 0;
    let tables = document.getElementsByClassName("table-column");
    let tests = [];

    for (let el of tables) {
        let div = el.getElementsByTagName("div")[0];
        let text = "";

        for (let child of div.childNodes) {
            if (!(child.nodeName == "#text")) continue;
            text += child.textContent.trim();
            text += "\n";
        }

        text = text.trim();

        if (!current_type) tests.push({ input: text });
        else tests[tests.length - 1].output = text;

        current_type = (current_type + 1) % 2;
    }

    return tests;
}

function getTimeAndMemoryLimits() {
    let card = document.getElementsByClassName("exercise-submition-card")[0];
    let paragraphs = card.getElementsByTagName("p");

    let timeLimit, memoryLimit;
    for (let el of paragraphs) {
        if (el.firstChild.textContent == "Tempo Limite:") {
            timeLimit = el.childNodes[1].textContent.trim().replace(" second(s)", "").replace(",", ".");
        } else if (el.firstChild.textContent == "Limite de Memória:") {
            memoryLimit = el.childNodes[1].textContent.trim().replace(" mb", "");
        }
    }

    timeLimit = parseFloat(timeLimit) * 1000;
    memoryLimit = parseFloat(memoryLimit);

    return { timeLimit, memoryLimit };
}