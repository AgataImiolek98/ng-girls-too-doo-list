import { Injectable } from '@angular/core';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks: string[] = [];
  defaultTooDoos: string[] = [
    'install NodeJS',
    'install Angular CLI',
    'create new app',
    'serve app',
    'develop app',
    'deploy app',
  ]

  constructor(private storage: StorageService) {
    const isSthInstorage: boolean =  !!storage.getData('Todo_List').length;
    this.tasks = isSthInstorage ? storage.getData('Todo_List') : this.defaultTooDoos
  }

  addTask(task: string) {
    this.tasks.push(task);
    this.updateStorage()
  }

  removeTask(task: string) {
    const taskId = this.tasks.indexOf(task)
    this.tasks.splice(taskId, 1);
    this.updateStorage();
  }

  updateTask(newValue: any, task: string ) {
    if(!newValue) {
      this.removeTask(task);
      return;
    }
    const taskId = this.tasks.indexOf(task)
    this.tasks[taskId] = newValue;
    this.updateStorage();
  }

  updateStorage(){
    this.storage.setData('Todo_List', this.tasks);
  }

}
