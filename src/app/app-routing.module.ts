import { NgModule } from '@angular/core';
import { ParenttableComponent } from './parenttable/parenttable.component';
import { AddUserComponent } from './adduser/adduser.component';
import { EditUserComponent } from './edituser/edituser.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: ParenttableComponent },
  { path: 'parent', component: ParenttableComponent },
  { path: 'edituser/:id', component: EditUserComponent },
  { path: 'adduser', component: AddUserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
