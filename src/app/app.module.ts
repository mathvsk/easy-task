import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { SharedModule } from "./components/shared/shared.module";
import { TasksModule } from "./components/tasks/tasks.module";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { UserComponent } from "./components/user/user.component";

@NgModule({
    declarations: [AppComponent, HeaderComponent, UserComponent], //declarar os módulos que serão utilizados,
    bootstrap: [AppComponent], //definir o componente que será carregado inicialmente,
    imports: [BrowserModule, SharedModule, TasksModule], //importar módulos de terceiros (standalone components),
})
export class AppModule {}