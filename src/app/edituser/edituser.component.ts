import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css'],
})
export class EditUserComponent implements OnInit {
  userForm!: FormGroup;
  userId!: number;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.userId = Number(this.route.snapshot.paramMap.get('id'));

    this.userForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      website: ['', [Validators.required]]
    });

    this.apiService.getUserById(this.userId).subscribe(user => {
      if (user) {
        this.userForm.patchValue(user);
      }
    });
  }

  editUser() {
    if (this.userForm.valid) {
      const updatedUser: User = { id: this.userId, ...this.userForm.value };

      this.apiService.updateUser(updatedUser).subscribe({
        next: () => {
          console.log(`User updated successfully.`);
          this.router.navigate(['/']);
        }
      });

    }
  }

}
