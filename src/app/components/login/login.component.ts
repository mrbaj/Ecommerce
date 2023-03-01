import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username?: string;
  password?: string;
  error?: string;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  signIn() {
    console.log('sign in');
    if (this.username === 'myusername' && this.password === 'mypassword') {
      console.log('sign in');

      this.router.navigate(['/home']);
    } else {
      this.error = 'Invalid username or password';
    }
  }

  signOut() {
    // logic to sign out the user
  }
}
