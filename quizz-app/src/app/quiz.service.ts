import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private questions = [
    {
      question: 'What is the capital of France?',
      answers: [
        { text: 'Paris', correct: true },
        { text: 'London', correct: false },
        { text: 'Berlin', correct: false },
        { text: 'Madrid', correct: false }
      ]
    },
    {
      question: 'What is the largest planet in the solar system?',
      answers: [
        { text: 'Mars', correct: false },
        { text: 'Jupiter', correct: true },
        { text: 'Saturn', correct: false },
        { text: 'Neptune', correct: false }
      ]
    },
    {
      question: 'What is the world\'s longest river?',
      answers: [
        { text: 'Amazon', correct: true },
        { text: 'Nile', correct: false },
        { text: 'Yangtze', correct: false },
        { text: 'Mississippi', correct: false }
      ]
    }
  ];

  getQuestions() {
    return this.questions;
  }

}
