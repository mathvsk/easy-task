import { Component, inject, Input } from '@angular/core';
import { TaskService } from '../../services/task/task.service';
import { ITask } from './task-module';

@Component({
  selector: 'app-task',
  standalone: false,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({ required: true }) task!: ITask;

  private taskService = inject(TaskService);

  onCompleteTask() {
    this.taskService.completeTask(this.task.id);
  }
}
