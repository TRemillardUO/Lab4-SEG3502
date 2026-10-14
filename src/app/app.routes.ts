import { Routes } from '@angular/router';
import { UserForm } from './user-form/user-form';

export const routes: Routes = [
  { path: 'form', component: UserForm },
  { path: '', redirectTo: 'form', pathMatch: 'full' },
  { path: '**', redirectTo: 'form' },
];
