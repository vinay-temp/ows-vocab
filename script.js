var CATEGORY = {
  ows: ["One Word Substitution", 516, ows_questions, ows_answers],
  idioms: ["Idioms", 415, idioms_questions, idioms_answers],
  syno: ["Synonyms", 0, syno_questions, syno_answers],
  anto: ["Antonyms", 0, anto_questions, anto_answers],
  mixed: ["Mixed Questions", 0, [], []],
};

var questions;
var answers;
var START;
var END;
var TARGET;
var SCORE = 0;
var QUESTION;
var ANSWER;
var seen = new Set();

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    // Generate a random index between 0 and i
    let j = Math.floor(Math.random() * (i + 1));

    // Swap elements array[i] and array[j]
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}


function newQuestion() {
  if (seen.size == TARGET) {
    QUESTION = "COMPLETED";
    document.getElementById("options").innerHTML = "";
    return [];
  }

  var num = Math.floor(Math.random() * TARGET);
  while (seen.has(num)) {
    num = Math.floor(Math.random() * TARGET);
  }
  seen.add(num);

  if (Math.round(Math.random())) {
    let temp = answers;
    answers = questions;
    questions = temp;
    console.log("hello")
  }

  QUESTION = questions[num];
  ANSWER = answers[num];
  var options = [];
  var chosen = new Set();

  options.push(num);
  chosen.add(num);

  while (chosen.size < 6) {
    let opt = Math.floor(Math.random() * TARGET);
    if (!chosen.has(opt)) {
      chosen.add(opt);
      options.push(opt);
    }
  }

  shuffleArray(options);
  return options;
}

function updateQuestion() {
  let options = newQuestion();
  document.getElementById("question").innerHTML = `${QUESTION}`;

  for (let i = 0; i < options.length; i++) {
    document.getElementById("option" + i).innerHTML = answers[options[i]];
    document.getElementById("option" + i).value = answers[options[i]];
  }

  document.getElementById("score").innerHTML = `${SCORE}/${TARGET}`;
}

let buttons = document.querySelectorAll(".option");

buttons.forEach((button, index) => {
  button.addEventListener("click", function () {
    if (ANSWER == button.value) {
        SCORE += 1;
        updateQuestion();
      buttons.forEach((btn, i) => {
        btn.style.background = "#333333";
      })
    } else {
      button.style.background = "red";
    }
  });
});

const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  START = parseInt(document.getElementById("start").value);
  END = parseInt(document.getElementById("end").value);
  TARGET = END - START + 1;

  if (TARGET < 10) {
    return alert("Range cannot be less than 10!");
  }


  questions = questions.slice(START - 1, END);
  answers = answers.slice(START - 1, END);


  form.classList.toggle("hidden");
  document.getElementById("quiz-container").classList.toggle("hidden");
  updateQuestion();
});

function updateForm(category) {
    let data = CATEGORY[category]
    document.getElementById("title").innerHTML = data[0];
    document.getElementById("range").innerHTML = `Valid range 1 to ${data[1]}`;
    questions = data[2];
    answers = data[3];

    document.getElementById("start").max = data[1] - 10;
    document.getElementById("end").max = data[1];
}

category_btns = document.querySelectorAll(".category");

category_btns.forEach((btn, index) => {
    btn.addEventListener("click", function() {
        document
              .getElementById("category-select")
              .classList.toggle("hidden");
            updateForm(btn.value);
            document.getElementById("form").classList.toggle("hidden");
    })
})
