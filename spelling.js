var CATEGORY = {
  ows: [
    "One Word Substitution",
    516,
    ows_questions,
    ows_answers,
    "https://drive.google.com/file/d/1V-2_eM9RfZbq2vLNVqylp1oLAfCAkiHc/view?usp=sharing",
  ],
  idioms: [
    "Idioms",
    415,
    idioms_questions,
    idioms_answers,
    "https://drive.google.com/file/d/1BrAQJvn-EOztbpQ4iOkn5pgGWidC_0GI/view?usp=sharing",
  ],
  syno: ["Synonyms", 0, syno_questions, syno_answers, ""],
  anto: ["Antonyms", 0, anto_questions, anto_answers, ""],
  spellings: [
    "Spellings",
    250,
    spellings_data,
    undefined,
    "https://drive.google.com/file/d/1Ouz9pS-XAvCL35aWru1ZhV_mzT_Yif2t/view?usp=sharing",
  ],
};

var DATA;
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

  QUESTION = "Find the correct spelling";


  let q = DATA[num];
  ANSWER = q[0];

  var options = [];
  var chosen = new Set();

  options.push(ANSWER);
  chosen.add(ANSWER);

  while (chosen.size < 6) {
    let opt = q[Math.floor(Math.random() * q.length)];
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
    document.getElementById("option" + i).innerHTML = options[i];
    document.getElementById("option" + i).value = options[i];
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
      });
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

  DATA = DATA.slice(START - 1, END);

  form.classList.toggle("hidden");
  document.getElementById("quiz-container").classList.toggle("hidden");
  updateQuestion();
});

function updateForm(category) {
  let data = CATEGORY[category];

  document.getElementById("title").innerHTML = data[0];
  document.getElementById("learn-resource").href = data[4];
  document.getElementById("range").innerHTML = `Valid range 1 to ${data[1]}`;

  DATA = data[2];

  document.getElementById("start").max = data[1] - 10;
  document.getElementById("end").max = data[1];
}

category_btns = document.querySelectorAll(".category");

updateForm("spellings");