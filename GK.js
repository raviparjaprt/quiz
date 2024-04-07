const quizContainer = document.getElementById('quiz');
const submitButton = document.getElementById('submit');


const questions = [
  {
    question: 'Who is the President of the United States?',
    answers: [
      { text: 'Joe Biden', correct: true },
      { text: 'Donald Trump', correct: false },
      { text: 'Barack Obama', correct: false },
      { text: 'George Washington', correct: false }
    ]
  },
  {
    question: 'Which city is the capital of India?',
    answers: [
      { text: 'Mumbai', correct: false },
      { text: 'New Delhi', correct: true },
      { text: 'Kolkata', correct: false },
      { text: 'Chennai', correct: false }
    ]
  },
  {
    question: 'Who is the President of the United States?',
    answers: [
      { text: 'Joe Biden', correct: true },
      { text: 'Donald Trump', correct: false },
      { text: 'Barack Obama', correct: false },
      { text: 'George Washington', correct: false }
    ]
  },
  {
    question: 'Which country is known as the "Land of the Rising Sun"?',
    answers: [
      { text: 'China', correct: false },
      { text: 'Japan', correct: true },
      { text: 'South Korea', correct: false },
      { text: 'Thailand', correct: false }
    ]
  },
  {
    question: 'What is the currency of Australia?',
    answers: [
      { text: 'Dollar', correct: true },
      { text: 'Euro', correct: false },
      { text: 'Pound', correct: false },
      { text: 'Yen', correct: false }
    ]
  },
  {
    question: 'Which country is famous for the Taj Mahal?',
    answers: [
      { text: 'India', correct: true },
      { text: 'Egypt', correct: false },
      { text: 'China', correct: false },
      { text: 'Italy', correct: false }
    ]
  },
  {
    question: 'Who wrote the national anthem of the United States?',
    answers: [
      { text: 'John Lennon', correct: false },
      { text: 'Bob Dylan', correct: false },
      { text: 'Francis Scott Key', correct: true },
      { text: 'Michael Jackson', correct: false }
    ]
  },
  {
    question: 'Which country is known as the "Land of the Midnight Sun"?',
    answers: [
      { text: 'Norway', correct: true },
      { text: 'Russia', correct: false },
      { text: 'Canada', correct: false },
      { text: 'Sweden', correct: false }
    ]
  },
  {
    question: 'What is the national animal of India?',
    answers: [
      { text: 'Lion', correct: false },
      { text: 'Elephant', correct: true },
      { text: 'Tiger', correct: false },
      { text: 'Leopard', correct: false }
    ]
  },
  {
    question: 'Which country is famous for the Eiffel Tower?',
    answers: [
      { text: 'Italy', correct: false },
      { text: 'Spain', correct: false },
      { text: 'France', correct: true },
      { text: 'Germany', correct: false }
    ]
  },
  {
    question: 'Who is the Prime Minister of the United Kingdom?',
    answers: [
      { text: 'Theresa May', correct: false },
      { text: 'Boris Johnson', correct: true },
      { text: 'Tony Blair', correct: false },
      { text: 'David Cameron', correct: false }
    ]
  },
  {
    question: 'Which city is the capital of Canada?',
    answers: [
      { text: 'Vancouver', correct: false },
      { text: 'Toronto', correct: false },
      { text: 'Ottawa', correct: true },
      { text: 'Montreal', correct: false }
    ]
  },
  {
    question: 'What is the national bird of the United States?',
    answers: [
      { text: 'Bald Eagle', correct: true },
      { text: 'Penguin', correct: false },
      { text: 'Peacock', correct: false },
      { text: 'Flamingo', correct: false }
    ]
  },
  {
    question: 'Which country is famous for the Great Wall?',
    answers: [
      { text: 'India', correct: false },
      { text: 'China', correct: true },
      { text: 'Egypt', correct: false },
      { text: 'Brazil', correct: false }
    ]
  },
  {
    question: 'Who is the Chancellor of Germany?',
    answers: [
      { text: 'Angela Merkel', correct: true },
      { text: 'Emmanuel Macron', correct: false },
      { text: 'Vladimir Putin', correct: false },
      { text: 'Justin Trudeau', correct: false }
    ]
  },
  {
    question: 'Which country is known as the "Land of Fire and Ice"?',
    answers: [
      { text: 'Iceland', correct: true },
      { text: 'Australia', correct: false },
      { text: 'Greece', correct: false },
      { text: 'Spain', correct: false }
    ]
  },
  {
    question: 'What is the national flower of Japan?',
    answers: [
      { text: 'Cherry Blossom', correct: true },
      { text: 'Lotus', correct: false },
      { text: 'Rose', correct: false },
      { text: 'Sunflower', correct: false }
    ]
  },
  {
    question: 'Which country is famous for the Pyramids of Giza?',
    answers: [
      { text: 'Egypt', correct: true },
      { text: 'Mexico', correct: false },
      { text: 'India', correct: false },
      { text: 'Greece', correct: false }
    ]
  },
  {
    question: 'Who is the Prime Minister of India?',
    answers: [
      { text: 'Narendra Modi', correct: true },
      { text: 'Rahul Gandhi', correct: false },
      { text: 'Manmohan Singh', correct: false },
      { text: 'Indira Gandhi', correct: false }
    ]
  },
  {
    question: 'Which city is the capital of Russia?',
    answers: [
      { text: 'Moscow', correct: true },
      { text: 'Saint Petersburg', correct: false },
      { text: 'Kiev', correct: false },
      { text: 'Warsaw', correct: false }
    ]
  },
  {
    question: 'What is the national animal of Australia?',
    answers: [
      { text: 'Kangaroo', correct: true },
      { text: 'Koala', correct: false },
      { text: 'Emu', correct: false },
      { text: 'Platypus', correct: false }
    ]
  },
  {
    question: 'Who is the Prime Minister of the United Kingdom?',
    answers: [
      { text: 'Boris Johnson', correct: true },
      { text: 'Theresa May', correct: false },
      { text: 'David Cameron', correct: false },
      { text: 'Tony Blair', correct: false }
    ]
  },
  {
    question: 'What is the capital of Australia?',
    answers: [
      { text: 'Canberra', correct: true },
      { text: 'Sydney', correct: false },
      { text: 'Melbourne', correct: false },
      { text: 'Perth', correct: false }
    ]
  },
  {
    question: 'What is the official language of Brazil?',
    answers: [
      { text: 'Portuguese', correct: true },
      { text: 'Spanish', correct: false },
      { text: 'English', correct: false },
      { text: 'French', correct: false }
    ]
  },
  {
    question: 'Who is the current Prime Minister of Canada?',
    answers: [
      { text: 'Justin Trudeau', correct: true },
      { text: 'Stephen Harper', correct: false },
      { text: 'Jean Chrétien', correct: false },
      { text: 'Pierre Trudeau', correct: false }
    ]
  },
  {
    question: 'Which country hosted the 2020 Summer Olympics?',
    answers: [
      { text: 'Japan', correct: true },
      { text: 'China', correct: false },
      { text: 'Brazil', correct: false },
      { text: 'Australia', correct: false }
    ]
  },
  {
    question: 'What is the national animal of India?',
    answers: [
      { text: 'Bengal Tiger', correct: true },
      { text: 'Lion', correct: false },
      { text: 'Elephant', correct: false },
      { text: 'Peacock', correct: false }
    ]
  },
  {
    question: 'What is the official currency of Germany?',
    answers: [
      { text: 'Euro', correct: true },
      { text: 'Pound', correct: false },
      { text: 'Dollar', correct: false },
      { text: 'Yen', correct: false }
    ]
  },
  {
    question: 'Who is the current Prime Minister of India?',
    answers: [
      { text: 'Narendra Modi', correct: true },
      { text: 'Rahul Gandhi', correct: false },
      { text: 'Manmohan Singh', correct: false },
      { text: 'Indira Gandhi', correct: false }
    ]
  },
  {
    question: 'What is the national flower of Japan?',
    answers: [
      { text: 'Cherry blossom', correct: true },
      { text: 'Lotus', correct: false },
      { text: 'Rose', correct: false },
      { text: 'Tulip', correct: false }
    ]
  },
  {
    question: 'Which city is known as the "City of Love"?',
    answers: [
      { text: 'Paris', correct: true },
      { text: 'Rome', correct: false },
      { text: 'Venice', correct: false },
      { text: 'Barcelona', correct: false }
    ]
  },
  {
    question: 'What is the national animal of Canada?',
    answers: [
      { text: 'Beaver', correct: true },
      { text: 'Moose', correct: false },
      { text: 'Polar Bear', correct: false },
      { text: 'Bison', correct: false }
    ]
  },
  {
    question: 'Who is the current President of France?',
    answers: [
      { text: 'Emmanuel Macron', correct: true },
      { text: 'François Hollande', correct: false },
      { text: 'Nicolas Sarkozy', correct: false },
      { text: 'Jacques Chirac', correct: false }
    ]
  },
  {
    question: 'Which country is known as the "Land of the Rising Sun"?',
    answers: [
      { text: 'Japan', correct: true },
      { text: 'China', correct: false },
      { text: 'South Korea', correct: false },
      { text: 'Thailand', correct: false }
    ]
  },
  {
    question: 'What is the national bird of the United States?',
    answers: [
      { text: 'Bald Eagle', correct: true },
      { text: 'American Robin', correct: false },
      { text: 'Blue Jay', correct: false },
      { text: 'Peregrine Falcon', correct: false }
    ]
  },
  {
    question: 'Which country is the largest producer of coffee in the world?',
    answers: [
      { text: 'Brazil', correct: true },
      { text: 'Colombia', correct: false },
      { text: 'Vietnam', correct: false },
      { text: 'Ethiopia', correct: false }
    ]
  },
  {
    question: 'Who is the current Chancellor of Germany?',
    answers: [
      { text: 'Angela Merkel', correct: true },
      { text: 'Gerhard Schröder', correct: false },
      { text: 'Helmut Kohl', correct: false },
      { text: 'Konrad Adenauer', correct: false }
    ]
  },
  {
    question: 'What is the national sport of Canada?',
    answers: [
      { text: 'Ice hockey', correct: true },
      { text: 'Lacrosse', correct: false },
      { text: 'Baseball', correct: false },
      { text: 'Soccer', correct: false }
    ]
  },
  {
    question: 'Who is the current Prime Minister of Australia?',
    answers: [
      { text: 'Scott Morrison', correct: true },
      { text: 'Tony Abbott', correct: false },
      { text: 'Malcolm Turnbull', correct: false },
      { text: 'Julia Gillard', correct: false }
    ]
  },
  {
    question: 'What is the official language of China?',
    answers: [
      { text: 'Mandarin Chinese', correct: true },
      { text: 'Cantonese Chinese', correct: false },
      { text: 'English', correct: false },
      { text: 'Japanese', correct: false }
    ]
  },
  {
    question: 'Who is the current Prime Minister of Japan?',
    answers: [
      { text: 'Yoshihide Suga', correct: true },
      { text: 'Shinzo Abe', correct: false },
      { text: 'Junichiro Koizumi', correct: false },
      { text: 'Yukio Hatoyama', correct: false }
    ]
  },
  // Add more questions here...
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
