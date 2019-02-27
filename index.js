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
      a1: '"And the winner is..."',
      a2: '"And the Academy Award goes to..."',
      a3: '"And the Oscar goes to..."',
      a4: 'It Depends on the Presenter',
      correct: '"And the Oscar goes to..."'
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
  answerPage: false,
  resultsPage: false
};


//start page
function startPageTemplate() {
  return `
  <section>
  <h1>Oscars Quiz</h1>
  <section id="start-page" role="region">
  <h2>Ladies and Gentlemen, Welcome to the first annual Oscars Quiz!</h2>
  <button id="js-start-button">Let's Goooo!</button>
  <div class="resultsPage"></div>
</section>`;
}

//question page
function questionPageTemplate(questionNum, currentScore) {
  return `
  <div id="quiz-container">
      <header role="banner">
          <img src="#" alt="#"> <!-- add an icon/image of like an award here or something-->
          <ul>
            <li>Question:<span class="quesNum">${STORE.questionOn}</span>/10</li>
            <!-- might have to implement a grid but we will see if we can do without-->
            <li>Score:<span class="personScore">${STORE.score}</span>/10</li>
          </ul>
        </header>
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
            <button type="submit" class="js-submitButton">Submit</button>
          </fieldset>
        </form>
  </div>
  `;
}




//answer page
function answerPageTemplate(questionNum, userAnswer) {
  if (STORE.submittedAnswer === STORE.questions[STORE.questionOn - 1].correct)
  
  return `
  
  `;
}






//results page
function resultsPageTemplate(currentScore) {
  return `
  
  `;
}






//View
function renderQuiz() {
  //startPage condition
  //load start page, hide questions


  //answerPage condition
  //if submittedAnswer matches correct answer
  //load congrats, correct answer
  //if submittedAnswer does not match correct answer
  //load sorry message
  //use questionOn to load correct answer
  //if questionOn = 10
  //load View Results instead of Next Question


  //resultsPage condition
  //use score to load results


  //else, the question page
  //use questionOn for counter
  //use score for score
  //use questionOn for question text
  //use questionOn for answer text

}

//Model
function questionAnswered(selectedAnswer) {
  //selectedAnswer = submittedAnswer
  //compare submittedAnswer to correct answer
  //if correct increase score
  //toggle on answerPage

}

//Controller
function handleSubmitAnswer() {
  //target submit button
  //target selected answer
  //questionAnswered(selected answer)
  //renderQuiz()
}

//Model
function newQuestion() {
  //turn off startPage
  //turn off answerPage
  //questionOn +1

  //if questionOn = 10
  //turn on results page
}

//Controller
function handleStartQuiz() {
  //target start button
  //newQuestion()
  //renderQuiz()
}

//Controller
function handleNextQuestion() {
  //target Next Question button
  //newQuestion()
  //renderQuiz()
}

//Model
function resetQuiz() {
  //submittedAnswer = ''
  //questionOn = 0
  //score = 0
  //startPage = true
  //answerPage = false
  //resultsPage= false
}

//Controller
function handleRestartQuiz() {
  //target restart quiz button
  //resetQuiz()
  //renderQuiz()
}

function handleQuizApp() {
  renderQuiz();
  handleSubmitAnswer();
  handleStartQuiz();
  handleNextQuestion();
  handleRestartQuiz();
}

$(handleQuizApp);