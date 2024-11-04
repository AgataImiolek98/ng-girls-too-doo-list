import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from "./components/form/form.component";
import { ListComponent } from "./components/list/list.component";
import { TaskService } from './services/task/task.service';
import { EmptyStateComponent } from './components/empty-state/empty-state.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormComponent, ListComponent, EmptyStateComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  taskService = inject(TaskService);
  tasks = this.taskService.tasks;
}
