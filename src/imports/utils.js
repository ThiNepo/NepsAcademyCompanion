const defaultCphData = {
    group: "Neps Academy",
    interactive: false,
    testType: "single",
    input: { type: "stdin" },
    output: { type: "stdout" },
    languages: {
        java: { mainClass: "Main", taskClass: "MainClass" },
    },
};

function batchIdGenerator() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
        var r = (Math.random() * 16) | 0,
            v = c == "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}

function getNormalizedName(name) {
    return name
        .trim()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replaceAll(" ", "_");
}

function isExercise(url) {
    const exerciseRegEx = /.*\/\/neps\.academy.*\/exercise\/\d+\/?/i;
    return exerciseRegEx.test(url);
}

function isCompetition(url) {
    const competitionRegEx = /.*\/\/neps\.academy.*\/competition\/\d+\/?/i;
    return competitionRegEx.test(url);
}

function isCompetitionExercise(url) {
    const competitionExerciseRegEx = /.*\/\/neps\.academy.*\/competition\/\d+\/exercise\/\d+\/?/i;
    return competitionExerciseRegEx.test(url);
}

function getExerciseId(url) {
    const numberRegEx = /\d+\/?$/i;
    return Number(numberRegEx.exec(url)[0].replace("/", ""));
}

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}