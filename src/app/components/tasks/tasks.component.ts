import { Component, input, Input } from '@angular/core';
import { TaskComponent } from "../task/task.component";
import { DUMMY_TASKS } from '../../dummy.tasks';
import { NewTaskComponent } from "../new-task/new-task.component";

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) userId!: string;

  public isAddingTask = false;
  private tasks = DUMMY_TASKS;

  get userTasks() {
    return this.tasks.filter(task => task.userId === this.userId);
  }

  onCompleteTask(taskId: string) {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
  }

  onStartAddTask() {
    this.isAddingTask = !this.isAddingTask;
  }

  onCancelTask() {
    this.isAddingTask = !this.isAddingTask;
  }
}
