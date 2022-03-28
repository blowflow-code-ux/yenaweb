const username = document.querySelector("#username"),
  submit = document.querySelector("#test"),
  patient = document.querySelector("#patientName"),
  date = document.querySelector("#date");
const LSname = localStorage.getItem("username");
const today = new Date().toLocaleDateString().replace(/\./g, "");

const depress = document.getElementsByName("depressive"),
  adhd = document.getElementsByName("adhd"),
  autism = document.getElementsByName("autism"),
  personality = document.getElementsByName("personality"),
  paranoia = document.getElementsByName("paranoia"),
  dependent = document.getElementsByName("dependent"),
  obsessive = document.getElementsByName("obsessive"),
  antisocial = document.getElementsByName("antisocial"),
  schizophrenia = document.getElementsByName("schizophrenia");

function getAnswers() {
  const answers = [];
  depress.forEach((node) => {
    if (node.checked) {
      const answer1 = node.value;
      answers.push(answer1);
    }
  });
  adhd.forEach((node) => {
    if (node.checked) {
      const answer2 = node.value;
      answers.push(answer2);
    }
  });
  autism.forEach((node) => {
    if (node.checked) {
      const answer3 = node.value;
      answers.push(answer3);
    }
  });
  personality.forEach((node) => {
    if (node.checked) {
      const answer4 = node.value;
      answers.push(answer4);
    }
  });
  paranoia.forEach((node) => {
    if (node.checked) {
      const answer5 = node.value;
      answers.push(answer5);
    }
  });
  dependent.forEach((node) => {
    if (node.checked) {
      const answer6 = node.value;
      answers.push(answer6);
    }
  });
  obsessive.forEach((node) => {
    if (node.checked) {
      const answer7 = node.value;
      answers.push(answer7);
    }
  });
  antisocial.forEach((node) => {
    if (node.checked) {
      const answer8 = node.value;
      answers.push(answer8);
    }
  });
  schizophrenia.forEach((node) => {
    if (node.checked) {
      const answer9 = node.value;
      answers.push(answer9);
    }
  });
  return answers;
}

function onSubmit(event) {
  event.preventDefault();
  const answersList = getAnswers();
  localStorage.setItem("answersValue", answersList);
  location.href = "./result.html";
}

function paintName() {
  username.innerHTML = `${LSname}`;
  patient.innerHTML = `${LSname}`;
}

function paintDate() {
  date.innerHTML = `${today}`;
}

function init() {
  paintDate();
  paintName();
  submit.addEventListener("submit", onSubmit);
}

init();
