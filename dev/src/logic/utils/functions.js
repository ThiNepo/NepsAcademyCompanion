export function getBatchId() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export function getNewBatch() {
  return { id: getBatchId(), size: 1 };
}

export function getNormalizedName(name) {
  return name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .replace(/\s/g, "_")
    .replace(/\W/g, "_")
    .replace(/_{2,}/g, "_")
    .replace(/_+$/g, "");
}

export function isExercise(url) {
  const exerciseRegExes = [
    /.*\/\/neps\.academy.*\/exercise\/\d+\/?/i,
    /.*\/\/neps\.academy.*\/course\/\d+\/lesson\/\d+\/?/i,
  ];
  return exerciseRegExes.some((regEx) => regEx.test(url));
}
