const quizContainer = document.getElementById('quiz');
const submitButton = document.getElementById('submit');




const questions = [
{
question: 'What does CPU stand for?',
answers: [
{ text: 'Central Processing Unit', correct: true },
{ text: 'Computer Processing Unit', correct: false },
{ text: 'Central Program Unit', correct: false },
{ text: 'Computer Program Unit', correct: false }
]
},
{
question: 'Which programming language is known as the "mother of all languages"?',
answers: [
{ text: 'C', correct: true },
{ text: 'Java', correct: false },
{ text: 'Python', correct: false },
{ text: 'Assembly', correct: false }
]
},
{
question: 'What is the primary function of an operating system?',
answers: [
{ text: 'Manage computer hardware and software resources', correct: true },
{ text: 'Create graphical user interfaces', correct: false },
{ text: 'Run applications', correct: false },
{ text: 'Connect to the internet', correct: false }
]
},
{
question: 'Which computer component stores data temporarily?',
answers: [
{ text: 'RAM (Random Access Memory)', correct: true },
{ text: 'CPU (Central Processing Unit)', correct: false },
{ text: 'HDD (Hard Disk Drive)', correct: false },
{ text: 'GPU (Graphics Processing Unit)', correct: false }
]
},
{
question: 'What does HTML stand for?',
answers: [
{ text: 'Hypertext Markup Language', correct: true },
{ text: 'Hyperlink and Text Markup Language', correct: false },
{ text: 'Home Tool Markup Language', correct: false },
{ text: 'Hypertext Markup Protocol', correct: false }
]
},
{
question: 'Which type of programming language uses a natural language-like syntax?',
answers: [
{ text: 'High-level programming language', correct: true },
{ text: 'Low-level programming language', correct: false },
{ text: 'Assembly language', correct: false },
{ text: 'Machine language', correct: false }
]
},
{
question: 'What is the binary number system?',
answers: [
{ text: 'A number system with a base of 2', correct: true },
{ text: 'A number system with a base of 10', correct: false },
{ text: 'A number system with a base of 16', correct: false },
{ text: 'A number system with a base of 8', correct: false }
]
},
{
question: 'What is the purpose of a compiler?',
answers: [
{ text: 'To convert high-level programming code into machine code', correct: true },
{ text: 'To execute program instructions', correct: false },
{ text: 'To create graphical user interfaces', correct: false },
{ text: 'To store data permanently', correct: false }
]
},
{
question: 'Which type of network covers a large geographic area?',
answers: [
{ text: 'WAN (Wide Area Network)', correct: true },
{ text: 'LAN (Local Area Network)', correct: false },
{ text: 'MAN (Metropolitan Area Network)', correct: false },
{ text: 'PAN (Personal Area Network)', correct: false }
]
},
{
question: 'What is the purpose of a firewall?',
answers: [
{ text: 'To protect a network from unauthorized access', correct: true },
{ text: 'To display web pages', correct: false },
{ text: 'To store data', correct: false },
{ text: 'To process mathematical calculations', correct: false }
]
},
{
question: 'What is the function of an input device?',
answers: [
{ text: 'To provide data to a computer system', correct: true },
{ text: 'To display output from a computer system', correct: false },
{ text: 'To store data permanently', correct: false },
{ text: 'To process data', correct: false }
]
},
{
question: 'What does GUI stand for?',
answers: [
{ text: 'Graphical User Interface', correct: true },
{ text: 'General User Interface', correct: false },
{ text: 'Graphical Universal Interface', correct: false },
{ text: 'General Universal Interface', correct: false }
]
},
{
question: 'Which programming language is often used for web development?',
answers: [
{ text: 'JavaScript', correct: true },
{ text: 'C++', correct: false },
{ text: 'Ruby', correct: false },
{ text: 'Swift', correct: false }
]
},
{
question: 'What is the purpose of an output device?',
answers: [
{ text: 'To display or present data from a computer system', correct: true },
{ text: 'To input data into a computer system', correct: false },
{ text: 'To process data', correct: false },
{ text: 'To store data permanently', correct: false }
]
},
{
question: 'What is the function of an operating system?',
answers: [
{ text: 'To manage computer hardware and software resources', correct: true },
{ text: 'To create graphical user interfaces', correct: false },
{ text: 'To run applications', correct: false },
{ text: 'To connect to the internet', correct: false }
]
},
{
question: 'What is the purpose of a router?',
answers: [
{ text: 'To connect multiple networks and forward data packets between them', correct: true },
{ text: 'To store data permanently', correct: false },
{ text: 'To execute program instructions', correct: false },
{ text: 'To protect a network from unauthorized access', correct: false }
]
},
{
question: 'What is the function of a hard disk drive (HDD)?',
answers: [
{ text: 'To store and retrieve digital data using magnetic storage', correct: true },
{ text: 'To perform mathematical calculations', correct: false },
{ text: 'To display output from a computer system', correct: false },
{ text: 'To provide data to a computer system', correct: false }
]
},
{
question: 'Which programming language is used to create dynamic web pages?',
answers: [
{ text: 'PHP', correct: true },
{ text: 'Java', correct: false },
{ text: 'Python', correct: false },
{ text: 'C#', correct: false }
]
},
{
question: 'What is the function of an output device?',
answers: [
{ text: 'To present or display data from a computer system', correct: true },
{ text: 'To input data into a computer system', correct: false },
{ text: 'To process data', correct: false },
{ text: 'To store data permanently', correct: false }
]
},
{
question: 'What is the purpose of an antivirus software?',
answers: [
{ text: 'To detect and remove malicious software from a computer', correct: true },
{ text: 'To create graphical user interfaces', correct: false },
{ text: 'To run applications', correct: false },
{ text: 'To connect to the internet', correct: false }
]
},
{
question: 'What does RAM stand for?',
answers: [
{ text: 'Random Access Memory', correct: true },
{ text: 'Read-Only Memory', correct: false },
{ text: 'Read-Write Memory', correct: false },
{ text: 'Random-Write Memory', correct: false }
]
},
{
question: 'Which programming language is often used for scientific and mathematical computations?',
answers: [
{ text: 'Python', correct: true },
{ text: 'JavaScript', correct: false },
{ text: 'Ruby', correct: false },
{ text: 'C#', correct: false }
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
