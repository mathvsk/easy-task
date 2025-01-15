import { Component, computed, EventEmitter, Input, Output, input } from '@angular/core';
import { IUser } from './user-module';

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({ required: true }) user!: IUser;
  @Input({ required: true }) selected!: boolean;
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
