import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { User } from '../user';

@Component({
  imports: [RouterLink],
  selector: 'app-user-details',
  styleUrl: './user-details.css',
  templateUrl: './user-details.html',
})
export class UserDetails {
  protected readonly user = inject(User).submitted;
}
