import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from './user.model';
//Commented line of code is used to demo the one user field with random index after clicking and Show the use of Signal Feature.
//import { DUMMY_USERS } from '../dummy-users';
//const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }
  /* selectedUser = signal(DUMMY_USERS[randomIndex]);
     imagePath = computed(()=> 'assets/users/' + this.selectedUser().avatar);
 */
  onSelectUser() {
    this.select.emit(this.user.id);
    /* const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
     this.selectedUser.set(DUMMY_USERS[randomIndex]);*/
  }
}
