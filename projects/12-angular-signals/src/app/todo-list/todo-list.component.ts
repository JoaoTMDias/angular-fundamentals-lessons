import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  @Input() todos: Todo[] = [];
  @Output() updateTodo = new EventEmitter<Todo>();

  handleUpdateTodo(todo: Todo): void {
    this.updateTodo.emit(todo);
  }
}
