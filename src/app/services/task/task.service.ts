import { Injectable } from '@angular/core';
import { ITask } from '../../dummy.tasks';
import { INewTask } from '../../components/new-task/new-task.component';
import { STORAGE_KEY } from '../../local-storage';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: ITask[] = [];

  constructor() {
    const dataLocalStorage = localStorage.getItem(STORAGE_KEY);

    this.tasks = dataLocalStorage ? JSON.parse(dataLocalStorage) : [];
   }

  userTasks(userId: string) {
    return this.tasks.filter(task => task.userId === userId);
  }

  completeTask(taskId: string) {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
    this.saveTasks();
  }

    addTask(newTask: INewTask, userId: string) {
      const addTask = {
        id: new Date().getTime().toString(),
        userId: userId,
        title: newTask.title,
        summary: newTask.summary,
        dueDate: newTask.dueDate
      }

      this.tasks.push(addTask);
      this.saveTasks();
    }

    private saveTasks() {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.tasks));
    }
}
