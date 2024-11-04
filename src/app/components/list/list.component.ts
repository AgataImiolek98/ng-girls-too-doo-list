import { Component } from '@angular/core';
import { TaskService } from '../../services/task/task.service';
import { TaskComponent } from "./task/task.component";


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  tasks: string[] = [];

  constructor(private taskService: TaskService){}

  ngOnInit(): void {
    this.tasks = this.taskService.tasks;
  }
}
