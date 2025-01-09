import { Component, Input } from '@angular/core';
import { ITask } from '../../dummy.tasks';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({ required: true }) task!: ITask;
}
