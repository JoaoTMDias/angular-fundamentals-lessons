import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoFormComponent } from './todo-form/todo-form.component'
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoCounterComponent } from './todo-counter/todo-counter.component';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    TodoFormComponent,
    TodoListComponent,
    TodoCounterComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  // Signal to store the list of todos
  todos = signal<Todo[]>([
    {
      id: "b76db3b4-d421-408f-981d-6f17aa48ad2d",
      title: "Learn Angular",
      completed: false,
    },
    {
      id: "e5579020-caea-44f8-88d7-7bc6eb023a23",
      title: "Learn TypeScript",
      completed: false,
    },
    {
      id: "79b6b13f-041d-4aa5-b768-f5e24269bed6",
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
          return {
            ...todoEntry,
            completed: !todoEntry.completed,
          }
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
  handleNewTodo(newTodoTitle: string): void {
    const title = newTodoTitle;

    if (title) {
      const newTodo: Todo = {
        id: crypto.randomUUID(),
        title,
        completed: false,
      };
      this.todos.update(todoList => [...todoList, newTodo]);
    }
  }
}
