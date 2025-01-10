import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
  @Output() cancelTask = new EventEmitter<void>();
  @Output() addTask = new EventEmitter<INewTask>();

  inputTaskTitle = "";
  inputTaskDescription = "";
  inputTaskDueDate = "";

  onCancel() {
    this.cancelTask.emit();
  }

  onSubmit() {
    this.addTask.emit({
      title: this.inputTaskTitle,
      summary: this.inputTaskDescription,
      dueDate: this.inputTaskDueDate,
    });

    this.onCancel();
  }

}
