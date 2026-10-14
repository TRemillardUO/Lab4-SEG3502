import { Service, signal } from '@angular/core';

export interface UserInfo {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
}

@Service()
export class User {
  readonly submitted = signal<UserInfo | null>(null);
}
