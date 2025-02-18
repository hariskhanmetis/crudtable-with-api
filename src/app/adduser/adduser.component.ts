import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AddUserComponent implements OnInit {
  userForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      website: ['', [Validators.required]]
    });
  }

  addUser() {
    if (this.userForm.valid) {
      const newUser: User = this.userForm.value;

      this.apiService.addUser(newUser).subscribe((response) => {
        console.log('✅ User added:', response);
        this.router.navigate(['/']);
      },
      error => {
        console.error('Error adding user:', error);
      });
    }
  }
}
