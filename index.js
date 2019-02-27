'use strict';

const STORE = {
  questions: [
    {
      num: 1,
      text: 'Which of these movies won the most Oscars?',
      a1: 'The Godfather',
      a2: 'The Notebook',
      a3: 'Titanic',
      a4: 'Forrest Gump',
      correct: 'Titanic'
    },
    {
      num: 2,
      text: 'How many Oscars did Titanic win?',
      a1: '11',
      a2: '20',
      a3: '7',
      a4: '13',
      correct: '11'
    },
    {
      num: 3,
      text: 'Which actress has won the most Oscars?',
      a1: 'Katharine Hepburn',
      a2: 'Julia Roberts',
      a3: 'Rachel McAdams',
      a4: 'Meryl Streep',
      correct: 'Katharine Hepburn'
    },
    {
      num: 4,
      text: 'How many times has Meryl Streep been nominated for an Oscar?',
      a1: '5',
      a2: '14',
      a3: '21',
      a4: '10',
      correct: '21'
    },
    {
      num: 5,
      text: 'When were the Oscars first broadcast in color?',
      a1: '1945',
      a2: '1966',
      a3: '1951',
      a4: '1969',
      correct: '1966'
    },
    {
      num: 6,
      text: 'What oranization is responsible for the Academy Awards?',
      a1: 'Screen Actors Guild',
      a2: 'American Film Institute',
      a3: 'Academy of Motion Picture Arts and Sciences',
      a4: 'American Academy of Stage and Screen',
      correct: 'Academy of Motion Picture Arts and Sciences'
    },
    {
      num: 7,
      text: 'Which actor has won the most Oscars for Best Actor?',
      a1: 'Jack Nicholson',
      a2: 'Tom Hanks',
      a3: 'Marlon Brando',
      a4: 'Daniel Day-Lewis',
      correct: 'Daniel Day-Lewis'
    },
    {
      num: 8,
      text: '5 of the last 6 Oscars for Best Director have gone to Directors from which country?',
      a1: 'Mexico',
      a2: 'The United States',
      a3: 'The United Kingdom',
      a4: 'France',
      correct: 'Mexico'
    },
    {
      num: 9,
      text: 'What do Academy Award presenters say before announcing a winner?',
      a1: 'And the winner is...',
      a2: 'And the Academy Award goes to...',
      a3: 'And the Oscar goes to...',
      a4: 'It Depends on the Presenter',
      correct: 'And the Oscar goes to...'
    },
    {
      num: 10,
      text: 'Which movie won Best Picture in the 2019 Oscars?',
      a1: 'A Star Is Born',
      a2: 'Black Panther',
      a3: 'Roma',
      a4: 'Green Book',
      correct: 'Green Book'
    }
  ],

  submittedAnswer: '',
  questionOn: 0,
  score: 0,
  startPage: true,
  quizPage: false,
  answerPage: false,
  resultsPage: false
};

//start page
function startPageTemplate() {
  return `
  <section>
  <h1>Oscars Quiz</h1>
  <section id="start-page" role="region">
  <h2>Ladies and Gentlemen,</h2>
  <h2>Welcome to the first annual Oscars Quiz!</h2>
  <button id="js-start-button">Start the Show!</button>
</section>`;
}

//question page
function questionPageTemplate() {
  return `
  <div id="quiz-container">
      <header role="banner">
          <ul>
            <li>Question:<span class="quesNum">${STORE.questionOn}</span>/10</li>
            <li>Score:<span class="personScore">${STORE.score}</span>/10</li>
          </ul>
        </header>
        <h2>${STORE.questions[STORE.questionOn - 1].text}</h2>
    <form>
          <fieldset>
            <label class="js-answerOption">
              <input type="radio" value="${STORE.questions[STORE.questionOn - 1].a1}" name="answer" required>
              <span>${STORE.questions[STORE.questionOn - 1].a1}</span>
            </label>
            <label class="js-answerOption">
              <input type="radio" value="${STORE.questions[STORE.questionOn - 1].a2}" name="answer" required>
              <span>${STORE.questions[STORE.questionOn - 1].a2}</span>
            </label>
            <label class="js-answerOption">
              <input type="radio" value="${STORE.questions[STORE.questionOn - 1].a3}" name="answer" required>
              <span>${STORE.questions[STORE.questionOn - 1].a3}</span>
            </label>
            <label class="js-answerOption">
              <input type="radio" value="${STORE.questions[STORE.questionOn - 1].a4}" name="answer" required>
              <span>${STORE.questions[STORE.questionOn - 1].a4}</span>
            </label>
          </fieldset>
          <button type="submit" class="js-submit-button">Submit</button>
        </form>
  </div>
  `;
}

//answer page
function answerPageTemplate() {
  if (STORE.questionOn === 10) {
    if (STORE.submittedAnswer === STORE.questions[STORE.questionOn - 1].correct) {
      return `
      <div id="correct-container">
    <h2>Congratulations!</h2>
    <p>Your answer is correct!</p>
    <p>You finished the quiz!</p>
  
    <button type="button" id="js-next-question-button">See Results</button>
  </div>
      `;}
    else {
      return `
      <div id="incorrect-container">
    <h2>Incorrect!</h2>
    <p>The correct answer is: ${STORE.questions[STORE.questionOn - 1].correct}</p>
    <p>You fnished the quiz!</p>
  
    <button type="button" id="js-next-question-button">See Results</button>
  </div>`;
    }
  }
  else {
    if (STORE.submittedAnswer === STORE.questions[STORE.questionOn - 1].correct) {
      return `
      <div id="correct-container">
    <h2>Congratulations!</h2>
    <p>Your answer is correct!</p>
  
    <button type="button" id="js-next-question-button">Next Question</button>
  </div>
      `;}
    else {
      return `
      <div id="incorrect-container">
    <h2>Incorrect!</h2>
    <p>The correct answer is: ${STORE.questions[STORE.questionOn - 1].correct}</p>
  
    <button type="button" id="js-next-question-button">Next Question</button>
  </div>`;
    }
  }
}

//results page
function resultsPageTemplate() {
  if (STORE.score >= 6) {
    return `
    <div id="results-container-positive">
  <h2>You're a star!</h2>
  <p>You got ${STORE.score}/10 questions correct!</p>

  <button type="button" id="js-restart-quiz">Restart Quiz</button>
</div>
    `;
  }
  else {
    return `
    <div id="results-container-negative">
  <h2>Boooooooooooo!</h2>
  <p>You only got ${STORE.score}/10 questions correct...</p>

  <button type="button" id="js-restart-quiz">Restart Quiz</button>
</div>
    `;
  }
}

//View
function renderQuiz() {
  //if STORE.startPage = true, load startPage
  if (STORE.startPage) {
    $('#container').html(startPageTemplate());
  }
  //if STORE.quizPage = true, load quizPage
  else if (STORE.quizPage) {
    $('#container').html(questionPageTemplate());
  }
  //if STORE.answerPage = true, load answerPage
  else if (STORE.answerPage) {
    $('#container').html(answerPageTemplate());
  }
  //if STORE.resultsPage = true, load resultsPage
  else if (STORE.resultsPage) {
    $('#container').html(resultsPageTemplate());
  }

}

//Model
function questionAnswered(selectedAnswer) {
  //selectedAnswer = submittedAnswer
  STORE.submittedAnswer = selectedAnswer;
  //toggle on answerPage
  STORE.answerPage = true;
  //turn off quizPage
  STORE.quizPage = false;
  //compare submittedAnswer to correct answer
  //if correct increase score
  if (selectedAnswer === STORE.questions[STORE.questionOn - 1].correct) {
    STORE.score ++;
  }
  

}

//Controller
function handleSubmitAnswer() {
  //target submit button
  $('#container').on('click', '.js-submit-button', function(event){
    //prevent default
    event.preventDefault();
    //get selected answer
    const selectedAnswer = $('input:checked').val();
    //run questionAnswered
    questionAnswered(selectedAnswer);
    //run renderQuiz
    renderQuiz();
  });
}

//Model
function newQuestion() {

  if(STORE.questionOn < 10) {
  //turn off startPage
    STORE.startPage = false;
    //turn off answerPage
    STORE.answerPage = false;
    //turn on quizPage
    STORE.quizPage = true;
    //questionOn +1
    STORE.questionOn++;
  }
  else {
  //turn off startPage
    STORE.startPage = false;
    //turn off answerPage
    STORE.answerPage = false;
    //turn on quizPage
    STORE.quizPage = false;
    //turn on resultsPage
    STORE.resultsPage = true;
  }
}

//Controller
function handleStartQuiz() {
  //target start button
  $('#container').on('click', '#js-start-button', function(){
    //running newQuestion
    newQuestion();
    //running renderQuiz
    renderQuiz();
  });
}

//Controller
function handleNextQuestion() {
  //target Next Question button
  $('#container').on('click', '#js-next-question-button', function(){
    //run newQuestion
    newQuestion();
    //run renderQuiz
    renderQuiz();
  });
}

//Model
function resetQuiz() {
  //RESETS ALL STORE VALUES
  //submittedAnswer = ''
  STORE.submittedAnswer = '';
  //questionOn = 0
  STORE.questionOn = 0;
  //score = 0
  STORE.score = 0;
  //startPage = true
  STORE.startPage = true;
  //quizPage = false
  STORE.quizPage = false;
  //answerPage = false
  STORE.answerPage = false;
  //resultsPage= false
  STORE.resultsPage = false;
}

//Controller
function handleRestartQuiz() {
  //target restart quiz button
  $('#container').on('click', '#js-restart-quiz', function(){
    //run resetQuiz
    resetQuiz();
    //run renderQuiz
    renderQuiz();
  });
}

function handleQuizApp() {
  handleSubmitAnswer();
  handleStartQuiz();
  handleNextQuestion();
  handleRestartQuiz();
  renderQuiz();
}

$(handleQuizApp);