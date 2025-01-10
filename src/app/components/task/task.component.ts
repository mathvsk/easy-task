import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { ITask } from '../../dummy.tasks';
import { CardComponent } from "../shared/card/card.component";
import { DatePipe } from '@angular/common';
import { TaskService } from '../../services/task/task.service';

@Component({
  selector: 'app-task',
  imports: [CardComponent, DatePipe],
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
