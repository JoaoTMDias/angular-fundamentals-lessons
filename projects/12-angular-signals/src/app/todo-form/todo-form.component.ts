import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';

const VALIDATION_RULES= [Validators.required, Validators.minLength(3), Validators.maxLength(50)];

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {
  @Output() newTodo = new EventEmitter<string>();

  newTodoForm = new FormGroup({
    title: new FormControl('', VALIDATION_RULES),
  });

  handleNewTodo(): void {
    const title = this.newTodoForm.controls.title.value?.trim();

    if (title) {
      this.newTodo.emit(title);
      this.newTodoForm.reset();
    }
  }
}
