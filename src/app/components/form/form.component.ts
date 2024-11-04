import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaskService } from '../../services/task/task.service';


@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  newTaskControl: FormControl<string> = new FormControl();

  constructor(private taskService: TaskService){}
  
  addTask(task: string) {
    this.taskService.addTask(task);
    this.newTaskControl.setValue('');
  }
}
