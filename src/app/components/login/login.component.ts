import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  signIn() {
    // logic to sign in the user
    this.router.navigate(['/home']);
  }

  signOut() {
    // logic to sign out the user
  }
}
