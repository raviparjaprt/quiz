const quizContainer = document.getElementById('quiz');
const submitButton = document.getElementById('submit');


const questions = [
{
question: 'What is the smallest unit of matter?',
answers: [
{ text: 'Atom', correct: true },
{ text: 'Molecule', correct: false },
{ text: 'Cell', correct: false },
{ text: 'Particle', correct: false }
]
},
{
  question: 'What is the atomic number of oxygen?',
  answers: [
    { text: '6', correct: false },
    { text: '8', correct: true },
    { text: '12', correct: false },
    { text: '16', correct: false }
  ]
},
{
  question: 'What is the largest planet in our solar system?',
  answers: [
    { text: 'Jupiter', correct: true },
    { text: 'Saturn', correct: false },
    { text: 'Mars', correct: false },
    { text: 'Earth', correct: false }
  ]
},
{
  question: 'Which scientist is known for the theory of general relativity?',
  answers: [
    { text: 'Isaac Newton', correct: false },
    { text: 'Albert Einstein', correct: true },
    { text: 'Galileo Galilei', correct: false },
    { text: 'Nikola Tesla', correct: false }
  ]
},
{
  question: 'What is the process by which plants convert light energy into chemical energy?',
  answers: [
    { text: 'Photosynthesis', correct: true },
    { text: 'Cellular respiration', correct: false },
    { text: 'Fermentation', correct: false },
    { text: 'Osmosis', correct: false }
  ]
},
{
  question: 'What is the smallest unit of matter?',
  answers: [
    { text: 'Atom', correct: true },
    { text: 'Molecule', correct: false },
    { text: 'Cell', correct: false },
    { text: 'Particle', correct: false }
  ]
},
{
  question: 'Which of the following is a renewable source of energy?',
  answers: [
    { text: 'Coal', correct: false },
    { text: 'Natural gas', correct: false },
    { text: 'Solar power', correct: true },
    { text: 'Nuclear power', correct: false }
  ]
},
{
  question: 'What is the main component of Earth\'s atmosphere?',
  answers: [
    { text: 'Nitrogen', correct: true },
    { text: 'Oxygen', correct: false },
    { text: 'Carbon dioxide', correct: false },
    { text: 'Water vapor', correct: false }
  ]
},
{
  question: 'Which scientist discovered penicillin?',
  answers: [
    { text: 'Marie Curie', correct: false },
    { text: 'Alexander Fleming', correct: true },
    { text: 'Louis Pasteur', correct: false },
    { text: 'Albert Einstein', correct: false }
  ]
},
{
  question: 'What is the chemical symbol for gold?',
  answers: [
    { text: 'Ag', correct: false },
    { text: 'Au', correct: true },
    { text: 'Fe', correct: false },
    { text: 'Cu', correct: false }
  ]
},
{
  question: 'Which planet is known as the "Red Planet"?',
  answers: [
    { text: 'Mars', correct: true },
    { text: 'Venus', correct: false },
    { text: 'Mercury', correct: false },
    { text: 'Jupiter', correct: false }
  ]
},
{
  question: 'What is the largest organ in the human body?',
  answers: [
    { text: 'Heart', correct: false },
    { text: 'Lungs', correct: false },
    { text: 'Liver', correct: false },
    { text: 'Skin', correct: true }
  ]
},
{
  question: 'What is the unit of electric current?',
  answers: [
    { text: 'Volt', correct: false },
    { text: 'Watt', correct: false },
    { text: 'Ampere', correct: true },
    { text: 'Ohm', correct: false }
  ]
},
{
  question: 'Which process involves the conversion of a solid directly into a gas without passing through the liquid state?',
  answers: [
    { text: 'Evaporation', correct: false },
    { text: 'Sublimation', correct: true },
    { text: 'Condensation', correct: false },
    { text: 'Melting', correct: false }
  ]
},
{
  question: 'Which part of the plant is responsible for photosynthesis?',
  answers: [
    { text: 'Leaves', correct: true },
    { text: 'Stem', correct: false },
    { text: 'Roots', correct: false },
    { text: 'Flowers', correct: false }
  ]
},
{
  question: 'Which gas makes up the majority of Earth\'s atmosphere?',
  answers: [
    { text: 'Oxygen', correct: false },
    { text: 'Nitrogen', correct: true },
    { text: 'Carbon dioxide', correct: false },
    { text: 'Argon', correct: false }
  ]
},
{
  question: 'What is the primary function of the nucleus in a cell?',
  answers: [
    { text: 'Energy production', correct: false },
    { text: 'Protein synthesis', correct: false },
    { text: 'Genetic information storage', correct: true },
    { text: 'Cellular respiration', correct: false }
  ]
},
{
  question: 'Which type of rock is formed by the cooling and solidification of magma or lava?',
  answers: [
    { text: 'Sedimentary rock', correct: false },
    { text: 'Metamorphic rock', correct: false },
    { text: 'Igneous rock', correct: true },
    { text: 'Volcanic rock', correct: false }
  ]
},
{
  question: 'What is the chemical formula for water?',
  answers: [
    { text: 'H2O', correct: true },
    { text: 'CO2', correct: false },
    { text: 'NaCl', correct: false },
    { text: 'O2', correct: false }
  ]
},
{
  question: 'What is the largest organ in the human body?',
  answers: [
    { text: 'Heart', correct: false },
    { text: 'Lungs', correct: false },
    { text: 'Liver', correct: false },
    { text: 'Skin', correct: true }
  ]
},
{
question: 'What is the largest organ in the human body?',
answers: [
{ text: 'Skin', correct: true },
{ text: 'Heart', correct: false },
{ text: 'Brain', correct: false },
{ text: 'Liver', correct: false }
]
},
{
question: 'What is the primary source of energy for living organisms?',
answers: [
{ text: 'Sun', correct: true },
{ text: 'Water', correct: false },
{ text: 'Air', correct: false },
{ text: 'Food', correct: false }
]
},

{
question: 'What is the process by which plants make their own food?',
answers: [
{ text: 'Photosynthesis', correct: true },
{ text: 'Respiration', correct: false },
{ text: 'Fermentation', correct: false },
{ text: 'Digestion', correct: false }
]
},
{
question: 'Which of the following is a renewable energy source?',
answers: [
{ text: 'Solar power', correct: true },
{ text: 'Coal', correct: false },
{ text: 'Natural gas', correct: false },
{ text: 'Nuclear power', correct: false }
]
},
{
question: 'What is the chemical symbol for water?',
answers: [
{ text: 'H2O', correct: true },
{ text: 'CO2', correct: false },
{ text: 'O2', correct: false },
{ text: 'NaCl', correct: false }
]
},
{
question: 'What is the force that pulls objects towards the center of the Earth?',
answers: [
{ text: 'Gravity', correct: true },
{ text: 'Friction', correct: false },
{ text: 'Magnetism', correct: false },
{ text: 'Inertia', correct: false }
]
},
{
question: 'Which of the following is NOT a form of energy?',
answers: [
{ text: 'Matter', correct: true },
{ text: 'Heat', correct: false },
{ text: 'Light', correct: false },
{ text: 'Electricity', correct: false }
]
},
{
question: 'What is the process of converting a solid directly into a gas called?',
answers: [
{ text: 'Sublimation', correct: true },
{ text: 'Evaporation', correct: false },
{ text: 'Condensation', correct: false },
{ text: 'Melting', correct: false }
]
},
{
question: 'Which of the following is NOT a primary color?',
answers: [
{ text: 'Purple', correct: true },
{ text: 'Red', correct: false },
{ text: 'Blue', correct: false },
{ text: 'Yellow', correct: false }
]
},
{
question: 'What is the unit of measurement for electric current?',
answers: [
{ text: 'Ampere', correct: true },
{ text: 'Volt', correct: false },
{ text: 'Watt', correct: false },
{ text: 'Ohm', correct: false }
]
},
{
question: 'Which planet is known as the "Red Planet"?',
answers: [
{ text: 'Mars', correct: true },
{ text: 'Venus', correct: false },
{ text: 'Jupiter', correct: false },
{ text: 'Mercury', correct: false }
]
},
{
question: 'What is the study of fossils called?',
answers: [
{ text: 'Paleontology', correct: true },
{ text: 'Archaeology', correct: false },
{ text: 'Anthropology', correct: false },
{ text: 'Geology', correct: false }
]
},
{
question: 'Which of the following is a mammal?',
answers: [
{ text: 'Elephant', correct: true },
{ text: 'Crocodile', correct: false },
{ text: 'Turtle', correct: false },
{ text: 'Frog', correct: false }
]
},

{
question: 'Which of the following is a plant hormone?',
answers: [
{ text: 'Auxin', correct: true },
{ text: 'Insulin', correct: false },
{ text: 'Estrogen', correct: false },
{ text: 'Adrenaline', correct: false }
]
},
{
question: 'What is the process of converting light energy into chemical energy in plants?',
answers: [
{ text: 'Photosynthesis', correct: true },
{ text: 'Respiration', correct: false },
{ text: 'Fermentation', correct: false },
{ text: 'Digestion', correct: false }
]
},
{
question: 'Which of the following is NOT a type of rock?',
answers: [
{ text: 'Water', correct: true },
{ text: 'Sedimentary', correct: false },
{ text: 'Metamorphic', correct: false },
{ text: 'Igneous', correct: false }
]
},
{
question: 'What is the SI unit of force?',
answers: [
{ text: 'Newton', correct: true },
{ text: 'Joule', correct: false },
{ text: 'Watt', correct: false },
{ text: 'Ohm', correct: false }
]
},
{
question: 'Which of the following is NOT a renewable energy source?',
answers: [
{ text: 'Coal', correct: true },
{ text: 'Solar power', correct: false },
{ text: 'Wind power', correct: false },
{ text: 'Hydroelectric power', correct: false }
]
}
];
function buildQuiz() {
  const output = [];

  questions.forEach((currentQuestion, questionNumber) => {
    const answers = [];
    for (let i = 0; i < currentQuestion.answers.length; i++) {
      answers.push(
        `<label>
          <input type="radio" name="question${questionNumber}" value="${i}">
          ${currentQuestion.answers[i].text}
        </label>`
      );
    }

    output.push(
      `<div class="question-container">
        <div class="question">${currentQuestion.question}</div>
        <div class="answer">${answers.join('')}</div>
      </div>`
    );
  });

  quizContainer.innerHTML = output.join('');
}

function showResults() {
  const answerContainers = quizContainer.querySelectorAll('.answer');
  let score = 0;

  questions.forEach((currentQuestion, questionNumber) => {
    const selectedOption = answerContainers[questionNumber].querySelector(`input[name=question${questionNumber}]:checked`);
    const selectedAnswer = Number(selectedOption.value);

    if (currentQuestion.answers[selectedAnswer].correct) {
      score++;
      answerContainers[questionNumber].style.color = 'green';
    } else {
      answerContainers[questionNumber].style.color = 'red';
    }
  });

  alert(`You scored ${score} out of ${questions.length}!`);
}
// Shuffle function using Fisher-Yates algorithm
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Shuffle the correct option for each question
questions.forEach((question) => {
  shuffle(question.answers);
});

// Shuffle function using Fisher-Yates algorithm
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Shuffle the questions
shuffle(questions);

// Shuffle the answers for each question
questions.forEach((question) => {
  shuffle(question.answers);
});

// Rest of the code...





buildQuiz();

submitButton.addEventListener('click', showResults);
