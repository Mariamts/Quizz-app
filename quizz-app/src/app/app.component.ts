import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { QuizService } from './quiz.service';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  questions: any[] = [];
  quizForm: FormGroup = new FormGroup({});
  currentQuestion = 0;

  constructor(private quizService: QuizService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.questions = this.quizService.getQuestions();
    this.buildForm();
  }

  private buildForm() {
    const group: Record<string, any> = {};
    this.questions.forEach(question => {
      group[question.id] = this.fb.control('');
    });
    this.quizForm = this.fb.group(group);
  }

  nextQuestion() {
    this.currentQuestion++;
  }

  onSubmit() {
    if (this.quizForm.valid) {
      console.log(this.quizForm.value);
    } else {
      alert('Please select an answer for every question.');
    }
  }
  
}
