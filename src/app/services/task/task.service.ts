import { Injectable } from '@angular/core';
import { DUMMY_TASKS } from '../../dummy.tasks';
import { INewTask } from '../../components/new-task/new-task.component';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks = DUMMY_TASKS;

  userTasks(userId: string) {
    return this.tasks.filter(task => task.userId === userId);
  }

  completeTask(taskId: string) {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
  }

    addTask(newTask: INewTask, userId: string) {
      this.tasks.push({
        id: new Date().getTime().toString(),
        userId: userId,
        title: newTask.title,
        summary: newTask.summary,
        dueDate: newTask.dueDate
      })
    }
}
