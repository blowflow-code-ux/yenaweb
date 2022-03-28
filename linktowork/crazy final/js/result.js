const username = document.querySelector("#name"),
  date = document.querySelector("#date");

const resultDiv = document.querySelector("#resultDiv");

function paintName() {
  const LSname = localStorage.getItem("username");
  username.innerHTML = `${LSname}`;
}

function paintDate() {
  const today = new Date().toLocaleDateString().replace(/\./g, "");
  date.innerHTML = `${today}`;
}

function changeAnswers() {
  const answersInt = localStorage.getItem("answersValue").split(",");
  const answersBoolean = [];
  for (let i = 0; i < answersInt.length; i++) {
    if (answersInt[i] < 4) {
      answersBoolean.push(true);
    } else {
      answersBoolean.push(false);
    }
  }
  return answersBoolean;
}

function getResult() {
  const disease = [
    ["Major Depressive Disorder", "Emotional Development Disorder"],
    ["ADHD", "Generalized Anxiety Disorder"],
    ["Autism Spectrum Disability", "Amnesia"],
    ["histrionic Personality Disorder", "Schizoid Personality Disorder"],
    ["Paranoia", "Intellectual Disability"],
    ["Dependent Personality Disorder", "Extraversion Personality Disorder"],
    ["Obsessive-Compulsive Personality Disorder", "Personality Disorder"],
    ["Antisocial Personality Disorder", "Extraversion Personality Disorder"],
    ["Schizophrenia", "Self-Harm"],
  ];
  const answersBoolean = changeAnswers();
  const resultList = [];
  for (let i = 0; i < answersBoolean.length; i++) {
    if (answersBoolean[i] === true) {
      resultList.push(disease[i][0]);
    } else {
      resultList.push(disease[i][1]);
    }
  }
  return resultList;
}

function paintResult() {
  const resultList = getResult();
  for (let i = 0; i < resultList.length; i++) {
    const div = document.createElement("div");
    div.className = "diseasename";
    div.innerHTML = resultList[i];
    resultDiv.appendChild(div);
  }
}

function init() {
  paintDate();
  paintName();
  paintResult();
}
init();
