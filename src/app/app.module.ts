import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { UserComponent } from "./components/user/user.component";
import { TasksComponent } from "./components/tasks/tasks.component";
import { CardComponent } from "./components/shared/card/card.component";
import { TaskComponent } from "./components/task/task.component";
import { NewTaskComponent } from "./components/new-task/new-task.component";

@NgModule({
    declarations: [AppComponent, HeaderComponent, UserComponent, CardComponent, TasksComponent, TaskComponent, NewTaskComponent], //declarar os módulos que serão utilizados,
    bootstrap: [AppComponent], //definir o componente que será carregado inicialmente,
    imports: [BrowserModule, FormsModule], //importar módulos de terceiros (standalone components),
})
export class AppModule {}