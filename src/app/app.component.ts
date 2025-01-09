import { Component, computed } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { UserComponent } from "./components/user/user.component";
import { DUMMY_USERS } from './dummy.users';
import { TasksComponent } from "./components/tasks/tasks.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public users = DUMMY_USERS;
  public selectedUserId!: string;

  get selectedUserName() {
    return this.users.find(user => user.id === this.selectedUserId)?.name || '';
  }

  onUserClick(id: string) {
    this.selectedUserId = id;
  }
}
