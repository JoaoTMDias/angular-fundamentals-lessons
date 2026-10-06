import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Todo } from './todo';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule ],
  templateUrl: './app.component.html',
  styles: `label { display: block }`,
})
export class AppComponent {
  // Form group for the new todo input
  newTodoForm = new FormGroup({
    title: new FormControl(''),
  });

  // Signal to store the list of todos
  todos = signal<Todo[]>([
    {
      id: 1,
      title: "Learn Angular",
      completed: false,
    },
    {
      id: 2,
      title: "Learn TypeScript",
      completed: false,
    },
    {
      id: 3,
      title: "Learn RxJS",
      completed: false,
    },
  ]);
  // Computed signal to store the list of completed todos
  completedTodos = computed(() => this.todos().filter(todo => todo.completed));

  /**
   * Updates the completion status of a todo item.
   * @param todo The todo item to be updated
   * @memberof AppComponent
   */
  updateTodo(todo: Todo) {
    this.todos.update(todoList => {
      return todoList.map(todoEntry => {
        if (todo.id === todoEntry.id) {
          todoEntry.completed = !todoEntry.completed;
        }

        return todoEntry
      });
    })
  }

  /**
   * Handles the creation of a new todo item.
   * @param title The title of the new todo item.
   * @memberof AppComponent
   */
  handleNewTodo() {
    const title = this.newTodoForm.get('title')?.value;

    if (title) {
      const newTodo: Todo = {
        id: Math.max(...this.todos().map(todo => todo.id)) + 1,
        title,
        completed: false,
      };
      this.todos.update(todoList => [...todoList, newTodo]);
      this.newTodoForm.reset();
    }
  }
}
