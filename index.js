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