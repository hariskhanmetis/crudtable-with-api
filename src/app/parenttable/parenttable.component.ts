import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { User } from '../models/user.model';


@Component({
  selector: 'app-parenttable',
  templateUrl: './parenttable.component.html',
  styleUrls: ['./parenttable.component.css']
})
export class ParenttableComponent implements OnInit {
  showChildTable: boolean = false;
  users: User[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.fetchUsers();
    console.log('ParentTableComponent has been initialized.');
  }

  fetchUsers() {
    this.apiService.getUsers().subscribe(users => {
      this.users = users;
      console.log('Users have been fetched!');
    });
  }

  viewUsers() {
    this.showChildTable = true;
  }

  deleteUser(id: number) {
    console.log('Deleting User');

    this.apiService.deleteUser(id).subscribe(() => {
      console.log(`✅ User with ID ${id} deleted successfully.`);
    });
  }

  editUser(updatedUser: User) {
    console.log(`Updating user:`);

    this.apiService.updateUser(updatedUser).subscribe({
      next: (response) => {
        console.log(`User is being edited`, response);
      }
    });
  }

}
