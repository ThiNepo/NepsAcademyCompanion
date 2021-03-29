document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("parse-button")
    .addEventListener("click", function test() {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        // since only one tab should be active and in the current window at once
        // the return variable should only have one entry
        var activeTab = tabs[0];
        var activeTabId = activeTab.id; // or do whatever you need

        //chrome.extension.getBackgroundPage().console.log(activeTab.url);

        if (
          activeTab.url.includes("neps.academy") &&
          activeTab.url.includes("exercise")
        ) {
          let exercise_id = Number(
            activeTab.url.split("/")[activeTab.url.split("/").length - 1]
          );
          chrome.extension
            .getBackgroundPage()
            .console.log("FETCH!", exercise_id);

          fetch(`https://api.neps.academy/programming-exercise/${exercise_id}`)
            .then((response) => {
              // Examine the text in the response
              response.json().then(function (data) {
                chrome.extension.getBackgroundPage().console.log(data);

                send_data(
                  data.id,
                  data.title,
                  data.memory_limit,
                  data.time_limit,
                  convert_tests(data.tests)
                );
              });
            })
            .catch((error) => {
              chrome.extension.getBackgroundPage().console.log(error);
            });
        }
      });
    });
});

function convert_tests(neps_tests) {
  let tests = [];

  for (test of neps_tests) {
    tests.push({
      input: test.input.replace("<br>", "\n"),
      output: test.output.replace("<br>", "\n"),
    });
  }

  chrome.extension.getBackgroundPage().console.log(tests);

  return tests;
}

function send_data(id, title, memory_limit, time_limit, tests) {
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
      xhr.send(
        JSON.stringify({
          name: title,
          //group: "Neps Academy",
          url: `https://neps.academy/exercise/${id}`,
          interactive: false,
          memoryLimit: memory_limit,
          timeLimit: time_limit,
          tests: tests,
          testType: "single",
          input: { type: "stdin" },
          output: { type: "stdout" },
          languages: {
            java: { mainClass: "Main", taskClass: "MainClass" },
          }, //,
          //batch: { id: "123456789", size: 1 },
        })
      );
      //xhr.send();
      chrome.extension.getBackgroundPage().console.log(xhr);
    } catch (err) {
      chrome.extension.getBackgroundPage().console.log(err);
    }
  });
}
