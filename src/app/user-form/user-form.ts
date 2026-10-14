import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user';

const PHONE_PATTERN = '[1-9]\\d{2}[1-9]\\d{6}';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-user-form',
  styleUrl: './user-form.css',
  templateUrl: './user-form.html',
})
export class UserForm {
  private builder = inject(FormBuilder);
  private router = inject(Router);
  private user = inject(User);

  userForm = this.builder.nonNullable.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    phone: ['', Validators.pattern(PHONE_PATTERN)],
    email: ['', Validators.email],
  });

  get firstName() {
    return this.userForm.controls.firstName;
  }
  get lastName() {
    return this.userForm.controls.lastName;
  }
  get phone() {
    return this.userForm.controls.phone;
  }
  get email() {
    return this.userForm.controls.email;
  }

  onSubmit(): void {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
      return;
    }
    this.user.submitted.set(this.userForm.getRawValue());
    this.router.navigate(['/details']);
  }
}
