import { Component, computed, EventEmitter, Input, Output, input } from '@angular/core';
import { DUMMY_USERS } from '../../dummy.users';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({ required: true }) avatar!: string;
  @Input() name!: string;
  @Output() userClick = new EventEmitter<string>();

  get imagePath() {
    return `users/${this.avatar}`;
  }

  // usando signals
  avatarSignal = input<string>();
  nameSignal = input<string>();
  imagePathSignal = computed(() => `users/${this.avatarSignal()}`);

  onUserClick() {
    this.userClick.emit();
  }
}
