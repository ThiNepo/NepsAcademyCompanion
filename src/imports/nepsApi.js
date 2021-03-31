async function getExerciseData(exerciseId, batchId, batchSize, url) {
    const response = await fetch(`https://api.neps.academy/programming-exercise/${exerciseId}`);

    if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        console.log(message);
        throw new Error(message);
    }

    const apiData = await response.json();
    console.log("Resultado API:", apiData);

    const cphData = convertApiData(apiData, batchId, batchSize, url);

    return cphData;
}

function convertApiData(apiData, batchId, batchSize, url) {
    const name = getNormalizedName(apiData.title);
    const memoryLimit = apiData.memory_limit;
    const timeLimit = apiData.time_limit * 1000;
    const tests = convertTests(apiData.tests);

    const cphData = {
        name, memoryLimit, timeLimit, tests,
        batchId, batchSize, url, ...defaultCphData
    };

    return cphData;
}

function convertTests(nepsTests) {
    let tests = [];
    for (let test of nepsTests) {
        tests.push({
            input: test.input.replaceAll("<br>", "\n").trim(),
            output: test.output.replaceAll("<br>", "\n").trim(),
        });
    }
    return tests;
}