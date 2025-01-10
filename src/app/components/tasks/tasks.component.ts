import { Component, inject, Input } from '@angular/core';
import { TaskComponent } from "../task/task.component";
import { DUMMY_TASKS } from '../../dummy.tasks';
import { INewTask, NewTaskComponent } from "../new-task/new-task.component";
import { TaskService } from '../../services/task/task.service';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) userId!: string;

  private taskService = inject(TaskService)

  public isAddingTask = false;

  get userTasks() {
    return this.taskService.userTasks(this.userId);
  }

  onStartAddTask() {
    this.isAddingTask = !this.isAddingTask;
  }

  onCancelTask() {
    this.isAddingTask = !this.isAddingTask;
  }
}
