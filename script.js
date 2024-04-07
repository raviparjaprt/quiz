const quizContainer = document.getElementById('quiz');
const submitButton = document.getElementById('submit');


const questions = [
  // Previous questions...

  {
    question: 'Who is often called the father of the computer?',
    answers: [
      { text: 'Alan Turing', correct: false }, 
      { text: 'Charles Babbage', correct: true },
      { text: 'Bill Gates', correct: false },
      { text: 'Steve Jobs', correct: false }
    ]
  },
  {
    question: 'Which shortcut key is used to save a file?',
    answers: [
      { text: 'ctrl+A', correct: false }, 
      { text: 'ctrl+B', correct: false },
      { text: 'ctrl+S', correct: true },
      { text: 'ctrl+shift+S', correct: false }
    ]
  },
  {
    question: 'ctrl+O shortcut key is used for-',
    answers: [
      { text: 'save', correct: false }, 
      { text: 'open new file', correct: true },
      { text: 'save as', correct: false },
      { text: 'copy', correct: false }
    ]
  },
  {
    question: 'Which of the following is a popular JavaScript framework?',
    answers: [
      { text: 'Angular', correct: false },
      { text: 'Vue.js', correct: false },
      { text: 'React', correct: true },
      { text: 'Ember.js', correct: false }
    ]
  },
  {
    question: 'What is the binary equivalent of the decimal number 10?',
    answers: [
     
      { text: '1000', correct: false },
      { text: '1111', correct: false },
      { text: '1100', correct: false },
      { text: '1010', correct: true }
    ]
  },
  {
    question: 'Which programming language is used to build Android apps?',
    answers: [
     
      { text: 'Python', correct: false },
      { text: 'C++', correct: false },
      { text: 'Java', correct: true },
      { text: 'Ruby', correct: false }
    ]
  },
  {
    question: 'What is the largest organ in the human body?',
    answers: [
      { text: 'Heart', correct: false },
      { text: 'Skin', correct: true },
      { text: 'Brain', correct: false },
      { text: 'Liver', correct: false }
    ]
  },
  {
    question: 'Which planet is known as the "Red Planet"?',
    answers: [
      { text: 'Venus', correct: false },
      { text: 'Mercury', correct: false },
      { text: 'Jupiter', correct: false },
      { text: 'Mars', correct: true }
    ]
  },
  {
    question: 'What is the chemical symbol for oxygen?',
    answers: [
      { text: 'Om', correct: false },
      { text: 'O', correct: true },
      { text: 'Ox', correct: false },
      { text: 'O2', correct: false }
    ]
  },
  {
    question: 'Which animal is known as the "king of the jungle"?',
    answers: [
      { text: 'Tiger', correct: false },
      { text: 'Elephant', correct: false },
      { text: 'Lion', correct: true },
      { text: 'Gorilla', correct: false }
    ]
  },
  {
    question: 'Which city is the capital of Australia?',
    answers: [
      { text: 'Sydney', correct: false },
      { text: 'Melbourne', correct: false },
      { text: 'Perth', correct: false },
      { text: 'Canberra', correct: true }
    ]
  },
  {
    question: 'Who painted the Mona Lisa?',
    answers: [
      { text: 'Leonardo da Vinci', correct: true },
      { text: 'Pablo Picasso', correct: false },
      { text: 'Vincent van Gogh', correct: false },
      { text: 'Michelangelo', correct: false }
    ]
  },
  {
    question: 'What is the capital city of Japan?',
    answers: [
      { text: 'Tokyo', correct: true },
      { text: 'Kyoto', correct: false },
      { text: 'Osaka', correct: false },
      { text: 'Hiroshima', correct: false }
    ]
  },
  {
    question: 'What is the largest ocean on Earth?',
    answers: [
      { text: 'Atlantic Ocean', correct: false },
      { text: 'Pacific Ocean', correct: true },
      { text: 'Indian Ocean', correct: false },
      { text: 'Arctic Ocean', correct: false }
    ]
  },
  {
    question: 'Which programming language is known for its simplicity and readability?',
    answers: [
      { text: 'Python', correct: true },
      { text: 'Java', correct: false },
      { text: 'C++', correct: false },
      { text: 'JavaScript', correct: false }
    ]
  },
  {
    question: 'What is the chemical symbol for gold?',
    answers: [
      { text: 'Au', correct: true },
      { text: 'Ag', correct: false },
      { text: 'Cu', correct: false },
      { text: 'Fe', correct: false }
    ]
  },
  {
    question: 'Which country is famous for the Eiffel Tower?',
    answers: [
      { text: 'France', correct: true },
      { text: 'Italy', correct: false },
      { text: 'Spain', correct: false },
      { text: 'United Kingdom', correct: false }
    ]
  },
  {
    question: 'Who is the author of the Harry Potter book series?',
    answers: [
      { text: 'J.K. Rowling', correct: true },
      { text: 'Stephen King', correct: false },
      { text: 'George R.R. Martin', correct: false },
      { text: 'Dan Brown', correct: false }
    ]
  },
  {
    question: 'What is the chemical symbol for water?',
    answers: [
      { text: 'H2O', correct: true },
      { text: 'CO2', correct: false },
      { text: 'NaCl', correct: false },
      { text: 'O2', correct: false }
    ]
  },
  {
    question: 'Which planet is known as the "Blue Planet"?',
    answers: [
      { text: 'Earth', correct: true },
      { text: 'Mars', correct: false },
      { text: 'Jupiter', correct: false },
      { text: 'Venus', correct: false }
    ]
  },
  {
    question: 'What is the chemical symbol for silver?',
    answers: [
      { text: 'Ag', correct: true },
      { text: 'Au', correct: false },
      { text: 'Pt', correct: false },
      { text: 'Cu', correct: false }
    ]
  },
  {
    question: 'Which company developed the Windows operating system?',
    answers: [
      { text: 'Microsoft', correct: true },
      { text: 'Apple', correct: false },
      { text: 'IBM', correct: false },
      { text: 'Google', correct: false }
    ]
  },
  {
    question: 'Who is the creator of the Linux operating system?',
    answers: [
      { text: 'Linus Torvalds', correct: true },
      { text: 'Bill Gates', correct: false },
      { text: 'Steve Jobs', correct: false },
      { text: 'Mark Zuckerberg', correct: false }
    ]
  },
  {
    question: 'What is the chemical symbol for carbon?',
    answers: [
      { text: 'C', correct: true },
      { text: 'Co', correct: false },
      { text: 'Ca', correct: false },
      { text: 'Cu', correct: false }
    ]
  },
  {
    question: 'Which country is famous for the Taj Mahal?',
    answers: [
      { text: 'China', correct: false },
      { text: 'India', correct: true },
      { text: 'Egypt', correct: false },
      { text: 'Italy', correct: false }
    ]
  },
  {
    question: 'Who wrote the play "Romeo and Juliet"?',
    answers: [
      { text: 'George Orwell', correct: false },
      { text: 'Jane Austen', correct: false },
      { text: 'Charles Dickens', correct: false },
      { text: 'William Shakespeare', correct: true }
    ]
  },
  {
    question: 'What is the chemical symbol for sodium?',
    answers: [
      { text: 'Na', correct: true },
      { text: 'So', correct: false },
      { text: 'Sn', correct: false },
      { text: 'Ni', correct: false }
    ]
  },
 {
    question: 'what is the full form of RAM?',
    answers: [
      { text: 'read all memory', correct: false },
      { text: 'random ascces memory', correct: true },
      { text: 'random extra memory', correct: false },
      { text: 'roll all memory', correct: false }
    ]
  },
  {
    question: 'What is the value of 2 + 2?',
    answers: [
      { text: '4', correct: true },
      { text: '2', correct: false },
      { text: '6', correct: false },
      { text: '8', correct: false }
    ]
  },
  {
    question: 'Which programming language is known as the "mother of all languages"?',
    answers: [
      { text: 'C', correct: false },
      { text: 'Assembly', correct: true },
      { text: 'Java', correct: false },
      { text: 'Python', correct: false }
    ]
  },
  {
    question: 'What does CSS stand for?',
    answers: [
      { text: 'Computer Style Sheets', correct: false },
      { text: 'Colorful Style Sheets', correct: false },
      { text: 'Cascading Style Sheets', correct: true },
      { text: 'Creative Style Sheets', correct: false }
    ]
  },
  {
    question: 'Which company developed the JavaScript programming language?',
    answers: [
      { text: 'Microsoft', correct: false },
      { text: 'Oracle', correct: false },
      { text: 'Google', correct: false },
      { text: 'Netscape', correct: true }
    ]
  },
  {
    question: 'What does HTML stand for?',
    answers: [
      { text: 'Hyperlinks and Text Markup Language', correct: false },
      { text: 'Hyper Text Markup Language', correct: true },
      { text: 'Home Tool Markup Language', correct: false },
      { text: 'Highly Typed Markup Language', correct: false }
    ]
  },
  {
    question: 'Who is often called the father of the computer?',
    answers: [
      { text: 'Alan Turing', correct: false },
      { text: 'Bill Gates', correct: false },
      { text: 'Steve Jobs', correct: false },
      { text: 'Charles Babbage', correct: true }
    ]
  },
  {
    question: 'Which of the following is a popular JavaScript framework?',
    answers: [
      { text: 'Angular', correct: false },
      { text: 'Vue.js', correct: false },
      { text: 'Ember.js', correct: false },
      { text: 'React', correct: true }
    ]
  },
  {
    question: 'What is the formula for calculating speed?',
    answers: [
      { text: 'Speed = Distance / Time', correct: true },
      { text: 'Speed = Time / Distance', correct: false },
      { text: 'Speed = Distance * Time', correct: false },
      { text: 'Speed = Distance + Time', correct: false }
    ]
  },
  {
    question: 'What is the SI unit of force?',
    answers: [
      { text: 'Newton', correct: true },
      { text: 'Watt', correct: false },
      { text: 'Joule', correct: false },
      { text: 'Kilogram', correct: false }
    ]
  },
  {
    question: 'Which of the following is a renewable source of energy?',
    answers: [
      { text: 'Solar power', correct: true },
      { text: 'Coal', correct: false },
      { text: 'Natural gas', correct: false },
      { text: 'Petroleum', correct: false }
    ]
  },
  {
    question: 'Which process involves the conversion of a solid directly into a gas?',
    answers: [
      { text: 'Sublimation', correct: true },
      { text: 'Condensation', correct: false },
      { text: 'Evaporation', correct: false },
      { text: 'Melting', correct: false }
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
    question: 'Which component of blood is responsible for carrying oxygen?',
    answers: [
      { text: 'Red blood cells', correct: true },
      { text: 'White blood cells', correct: false },
      { text: 'Platelets', correct: false },
      { text: 'Plasma', correct: false }
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
    question: 'Which of the following is a greenhouse gas?',
    answers: [
      { text: 'Carbon dioxide', correct: true },
      { text: 'Oxygen', correct: false },
      { text: 'Nitrogen', correct: false },
      { text: 'Argon', correct: false }
    ]
  },
  {
    question: 'Which type of electromagnetic waves has the shortest wavelength?',
    answers: [
      { text: 'Gamma rays', correct: true },
      { text: 'X-rays', correct: false },
      { text: 'Ultraviolet', correct: false },
      { text: 'Visible light', correct: false }
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
  {
    question: 'What is the process by which plants make their own food called?',
    answers: [
      { text: 'Photosynthesis', correct: true },
      { text: 'Respiration', correct: false },
      { text: 'Fermentation', correct: false },
      { text: 'Transpiration', correct: false }
    ]
  },
  {
    question: 'What is the binary equivalent of the decimal number 10?',
    answers: [
      { text: '1000', correct: false },
      { text: '1010', correct: true },
      { text: '1111', correct: false },
      { text: '1100', correct: false }
    ]
  },
  {
    question: 'Which programming language is used to build Android apps?',
    answers: [
      { text: 'Python', correct: false },
      { text: 'C++', correct: false },
      { text: 'Java', correct: true },
      { text: 'Ruby', correct: false }
    ]
  },
  {
    question: 'What is the largest organ in the human body?',
    answers: [
      { text: 'Heart', correct: false },
      { text: 'Brain', correct: false },
      { text: 'Liver', correct: false },
      { text: 'Skin', correct: true }
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
    question: 'What is the chemical symbol for oxygen?',
    answers: [
      { text: 'Om', correct: false },
      { text: 'O', correct: true },
      { text: 'Ox', correct: false },
      { text: 'Oz', correct: false }
    ]
  },
  {
    question: 'Which animal is known as the "king of the jungle"?',
    answers: [
      { text: 'Tiger', correct: false },
      { text: 'Elephant', correct: false },
      { text: 'Lion', correct: true },
      { text: 'Gorilla', correct: false }
    ]
  },
  {
    question: 'Which city is the capital of Australia?',
    answers: [
      { text: 'Sydney', correct: false },
      { text: 'Canberra', correct: true },
      { text: 'Melbourne', correct: false },
      { text: 'Perth', correct: false }
    ]
  },
  {
    question: 'Who painted the Mona Lisa?',
    answers: [
      { text: 'Leonardo da Vinci', correct: true },
      { text: 'Pablo Picasso', correct: false },
      { text: 'Vincent van Gogh', correct: false },
      { text: 'Michelangelo', correct: false }
    ]
  },
  {
    question: 'What is the capital city of Japan?',
    answers: [
      { text: 'Tokyo', correct: true },
      { text: 'Kyoto', correct: false },
      { text: 'Osaka', correct: false },
      { text: 'Hiroshima', correct: false }
    ]
  },
  {
    question: 'What is the largest ocean on Earth?',
    answers: [
      { text: 'Atlantic Ocean', correct: false },
      { text: 'Indian Ocean', correct: false },
      { text: 'Pacific Ocean', correct: true },
      { text: 'Arctic Ocean', correct: false }
    ]
  },
  {
    question: 'What is the purpose of a GPU in a computer?',
    answers: [
      { text: 'Render graphics and images', correct: true },
      { text: 'Perform calculations', correct: false },
      { text: 'Manage network connections', correct: false },
      { text: 'Store data', correct: false }
    ]
  },
  {
    question: 'What is the function of a DNS server?',
    answers: [
      { text: 'Translate domain names to IP addresses', correct: true },
      { text: 'Host websites', correct: false },
      { text: 'Manage email communication', correct: false },
      { text: 'Provide security against cyber threats', correct: false }
    ]
  },
  {
    question: 'What is the purpose of a loop in programming?',
    answers: [
      { text: 'Repeat a set of instructions', correct: true },
      { text: 'Store data temporarily', correct: false },
      { text: 'Perform mathematical calculations', correct: false },
      { text: 'Handle errors and exceptions', correct: false }
    ]
  },
  {
    question: 'What is the primary function of an operating system?',
    answers: [
      { text: 'Manage computer hardware and software resources', correct: true },
      { text: 'Create and edit documents', correct: false },
      { text: 'Browse the internet', correct: false },
      { text: 'Send and receive emails', correct: false }
    ]
  },
  {
    question: 'What is the purpose of a cache in a computer?',
    answers: [
      { text: 'Store frequently accessed data for faster retrieval', correct: true },
      { text: 'Perform logical operations', correct: false },
      { text: 'Encrypt sensitive information', correct: false },
      { text: 'Control input and output devices', correct: false }
    ]
  },
  {
    question: 'What does the acronym SSD stand for?',
    answers: [
      { text: 'Solid State Drive', correct: true },
      { text: 'Super Speed Data', correct: false },
      { text: 'System Security Device', correct: false },
      { text: 'Software Development Kit', correct: false }
    ]
  },
  {
    question: 'What is the purpose of a conditional statement in programming?',
    answers: [
      { text: 'Make decisions based on certain conditions', correct: true },
      { text: 'Perform repetitive tasks', correct: false },
      { text: 'Manipulate text and strings', correct: false },
      { text: 'Handle errors and exceptions', correct: false }
    ]
  },
  {
    question: 'What is the difference between HTTP and HTTPS?',
    answers: [
      { text: 'HTTPS encrypts data transmitted over the network', correct: true },
      { text: 'HTTP is used for secure communication', correct: false },
      { text: 'HTTPS uses a different port number', correct: false },
      { text: 'HTTP is faster than HTTPS', correct: false }
    ]
  },
  {
    question: 'What is the purpose of an API?',
    answers: [
      { text: 'Facilitate communication between different software applications', correct: true },
      { text: 'Store and manage data', correct: false },
      { text: 'Perform calculations and execute code', correct: false },
      { text: 'Display web pages and content', correct: false }
    ]
  },
  {
    question: 'CRT monitor screen have a layer of______ on it.',
    answers: [
      { text: 'Phosphurus', correct: true },
      { text: 'Carbon', correct: false },
      { text: 'Copper', correct: false },
      { text: 'Auram', correct: false }
    ]
  },
  {
    question: '____ is called mind of computer',
    answers: [
      { text: 'ALU', correct: false },
      { text: 'MMU', correct: false },
      { text: 'CPU', correct: true },
      { text: 'GUI', correct: false }
    ]
  },
  {
    question: 'What is the function of an operating system?',
    answers: [
      { text: 'Manage hardware resources and provide services for software', correct: true },
      { text: 'Execute program instructions', correct: false },
      { text: 'Store and retrieve data', correct: false },
      { text: 'Perform calculations and logical operations', correct: false }
    ]
  },
  {
    question: 'What is the purpose of a firewall?',
    answers: [
      { text: 'To protect a network by monitoring and controlling incoming and outgoing network traffic', correct: true },
      { text: 'To convert domain names to IP addresses', correct: false },
      { text: 'To provide a secure connection between a client and a server', correct: false },
      { text: 'To optimize website performance and load times', correct: false }
    ]
  },
  {
    question: 'What is the difference between RAM and ROM?',
    answers: [
      { text: 'RAM is volatile memory that stores data temporarily, while ROM is non-volatile memory that stores permanent instructions', correct: true },
      { text: 'RAM is non-volatile memory that stores permanent instructions, while ROM is volatile memory that stores data temporarily', correct: false },
      { text: 'RAM and ROM are both types of volatile memory', correct: false },
      { text: 'RAM and ROM are both types of non-volatile memory', correct: false }
    ]
  },
  {
    question: 'What is the purpose of a compiler?',
    answers: [
      { text: 'To translate high-level programming code into machine code that can be executed by a computer', correct: true },
      { text: 'To debug and test software applications', correct: false },
      { text: 'To create user interfaces and design graphical elements', correct: false },
      { text: 'To manage and organize databases', correct: false }
    ]
  },
  {
    question: 'Which of the following is not a type of computer code?',
    answers: [
      { text: 'ASCII', correct: false },
      { text: 'BCD', correct: false },
      { text: 'EBCDIC', correct: false },
      { text: 'EDIC', correct: true }
    ]
  },
  {
    question: 'In which year microsoft was founded?',
    answers: [
      { text: '1934', correct: false },
      { text: '1975', correct: true },
      { text: '1978', correct: false },
      { text: '1988', correct: false }
    ]
  },
  {
    question: 'A_____is approximately a million bytes?',
    answers: [
      { text: 'MB', correct: true },
      { text: 'TB', correct: false },
      { text: 'KB', correct: false },
      { text: 'GB', correct: false }
    ]
  },
  {
    question: 'What is the capital of Germany?',
    answers: [
      { text: 'Berlin', correct: true },
      { text: 'Paris', correct: false },
      { text: 'Rome', correct: false },
      { text: 'Madrid', correct: false }
    ]
  },
  {
    question: 'Which company developed the iPhone?',
    answers: [
      { text: 'Apple', correct: true },
      { text: 'Samsung', correct: false },
      { text: 'Microsoft', correct: false },
      { text: 'Sony', correct: false }
    ]
  },
  {
    question: 'What does RAM stand for?',
    answers: [
      { text: 'Random Access Memory', correct: true },
      { text: 'Read Only Memory', correct: false },
      { text: 'Real-time Advanced Memory', correct: false },
      { text: 'Remote Access Module', correct: false }
    ]
  },
  {
    question: 'Who is the CEO of Tesla?',
    answers: [
      { text: 'Elon Musk', correct: true },
      { text: 'Jeff Bezos', correct: false },
      { text: 'Mark Zuckerberg', correct: false },
      { text: 'Tim Cook', correct: false }
    ]
  },
  {
    question: 'What was the chief component of first generation computers?',
    answers: [
      { text: 'AI', correct: false },
      { text: 'Vaccume tube', correct: false },
      { text: 'Transistor', correct: true },
      { text: 'multi processors', correct: false }
    ]
  },
  {
    question: 'Who wrote the play "Romeo and Juliet"?',
    answers: [
      { text: 'William Shakespeare', correct: true },
      { text: 'George Orwell', correct: false },
      { text: 'Jane Austen', correct: false },
      { text: 'Charles Dickens', correct: false }
    ]
  },
  {
    question: 'What is the chemical symbol for sodium?',
    answers: [
      { text: 'So', correct: false },
      { text: 'Na', correct: true },
      { text: 'Sn', correct: false },
      { text: 'Ni', correct: false }
    ]
  }
]

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
