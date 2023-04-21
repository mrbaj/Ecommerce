import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from 'src/app/rest.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username?: string;
  password?: string;
  error?: string;
  authenticated?: boolean;
  isAdmin?: boolean;

  constructor(private router: Router, private rest: RestService) {}

  ngOnInit(): void {
    this.rest.userAuthenticated.subscribe((res) => {
      this.authenticated = res;
    });
    this.rest.userIfAdmin.subscribe((res) => {
      this.isAdmin = res;
    });
  }

  signIn() {
    this.rest.authenticateUser(this.username!, this.password!);
    setTimeout(() => {
      if (this.authenticated && this.isAdmin) {
        this.router.navigate(['/admin']);
      } else if (this.authenticated && !this.isAdmin) {
        this.router.navigate(['/home']);
      } else {
        this.error = 'Invalid username or password';
      }
    }, 500);
  }

  signOut() {
    // logic to sign out the user
    this.router.navigate(['/login']);
  }
  sumtwonumbers(a: number, b: number) {
    return a + b;
  }
  //write test cases for this function
  //test cases should be written in a separate file
}
