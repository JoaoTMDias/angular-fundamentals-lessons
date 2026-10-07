import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import type { Signal } from '@angular/core';
import type { Todo } from '../todo';

@Component({
  selector: 'app-todo-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-counter.component.html',
  styleUrls: ['./todo-counter.component.css']
})
export class TodoCounterComponent {
  @Input() completedTodos!: Signal<Todo[]>;
}
