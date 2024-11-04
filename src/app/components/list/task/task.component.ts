import { Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TaskService } from '../../../services/task/task.service';
import { TooLongValuePipe } from '../../../pipes/too-long-value.pipe';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [TooLongValuePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input() task!: string;

  editMode: boolean = false;
  editedTask$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(private taskService: TaskService){}

  removeTask(task: string) {
    this.taskService.removeTask(task);
  }

  updateTask(task: string, newValue: string): void {
    this.taskService.updateTask(newValue, task)
    if (newValue) {
      this.toggleEditTask(task);
    }
  }

  toggleEditTask(task: string) {
    const isTaskClicked = task !== this.editedTask$.value;
    this.editedTask$.next(isTaskClicked ? task : '');
  }

}
