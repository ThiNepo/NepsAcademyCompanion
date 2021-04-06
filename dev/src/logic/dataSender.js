export function sendProblemData(problemData) {
  console.log("Enviando problema:", problemData);

  for (const [appName, appPort] of defaultPorts) {
    try {
      sendDataToPort(problemData, appPort);
    } catch {
      console.log(`Não foi possível enviar o problema à aplicação ${appName}`);
    }
  }
}

function sendDataToPort(data, port) {
  const url = `http://localhost:${port}/`;
  return new Promise((resolve) => {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.timeout = 5000;

    xhr.onload = () => resolve();
    xhr.ontimeout = () => resolve();
    xhr.onabort = () => resolve();
    xhr.onerror = () => resolve();

    xhr.send(JSON.stringify(data));
  });
}

const defaultPorts = new Map([["CPH", 27121]]);
