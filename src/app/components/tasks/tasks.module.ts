import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { TasksComponent } from "./tasks.component";
import { NewTaskComponent } from "../new-task/new-task.component";
import { TaskComponent } from "../task/task.component";

@NgModule({
    declarations: [TasksComponent, TaskComponent, NewTaskComponent],
    imports: [SharedModule, CommonModule, FormsModule],
    exports: [TasksComponent],
})
export class TasksModule { } 