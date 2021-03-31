async function parseCompetition() {
    let exercises = [];

    for (el of document.getElementsByTagName("a")) {
        if (isCompetitionExercise(el.href)) {
            let id = getExerciseId(el.href);
            let url = el.href.replace(/\/competition\/\d+/i, "");
            exercises.push({ id, url });
        }
    }

    const batchId = batchIdGenerator(), batchSize = exercises.length;
    for (let i = exercises.length - 1; i >= 0; i--) {
        let exercise = exercises[i];
        let exerciseData = await getExerciseData(exercise.id, batchId, batchSize, exercise.url);

        exerciseData.name = String.fromCharCode(65 + Number(i)) + "_" + exerciseData.name;

        chrome.runtime.sendMessage({ isExerciseData: 1, exerciseData });
    }
}