import { Component, computed } from '@angular/core';
import { DUMMY_USERS } from './dummy.users';;

@Component({
  selector: 'app-root',
  standalone: false,
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
