import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../services/task/task.service';

export interface INewTask {
  title: string;
  summary: string;
  dueDate: string;
}

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string;
  @Output() cancelTask = new EventEmitter<void>();

  private taskService = inject(TaskService);

  inputTaskTitle = "";
  inputTaskDescription = "";
  inputTaskDueDate = "";

  onCancel() {
    this.cancelTask.emit();
  }

  onSubmit() {
    this.taskService.addTask({
      title: this.inputTaskTitle,
      summary: this.inputTaskDescription,
      dueDate: this.inputTaskDueDate,
    }, this.userId);

    this.onCancel();
  }

}
