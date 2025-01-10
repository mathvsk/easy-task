import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITask } from '../../dummy.tasks';
import { CardComponent } from "../shared/card/card.component";

@Component({
  selector: 'app-task',
  imports: [CardComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({ required: true }) task!: ITask;
  @Output() completeTask = new EventEmitter<string>();

  onCompleteTask() {
    this.completeTask.emit(this.task.id);
  }
}
