import { Component, computed, EventEmitter, Input, Output, input } from '@angular/core';

interface IUser {
  id: string;
  avatar: string;
  name: string;
}

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({ required: true }) user!: IUser;
  @Output() userClick = new EventEmitter<string>();

  get imagePath() {
    return `users/${this.user.avatar}`;
  }

  // usando signals
  avatarSignal = input<string>();
  nameSignal = input<string>();
  imagePathSignal = computed(() => `users/${this.avatarSignal()}`);

  onUserClick() {
    this.userClick.emit(this.user.id);
  }
}
