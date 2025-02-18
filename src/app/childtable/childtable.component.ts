import { Component, AfterViewInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-childtable',
  templateUrl: './childtable.component.html',
  styleUrls: ['./childtable.component.css']
})
export class ChildtableComponent implements OnDestroy, AfterViewInit{
  @Input() users: User[] = [];
  @Output() editUser = new EventEmitter<User>();
  @Output() deleteUser = new EventEmitter<number>();

  constructor(private router: Router) {}

  onDelete(id: number) {
    this.deleteUser.emit(id);
    console.log(`User with ${id} ID for deletion has been emitted for deletion.`);
  }

  onEdit(user: User) {
    this.editUser.emit(user);
    console.log(`User with ${user.id} ID has been emitted for editing.`);
    this.router.navigate(['/edituser', user.id]);
  }

  ngAfterViewInit(): void {
    console.log("ChildTableComponent View has been fully initialized.");
    console.log("Current Users:", this.users);
  }

  ngOnDestroy(): void {
    console.log("ChildtableComponent Destroyed! Cleaning up...");
  }
}
