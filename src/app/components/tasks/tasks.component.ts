import { Component, inject, Input } from '@angular/core';
import { TaskService } from '../../services/task/task.service';

@Component({
  selector: 'app-tasks',
  standalone: false,
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
