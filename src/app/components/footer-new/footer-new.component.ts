import { NumberSymbol } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-new',
  templateUrl: './footer-new.component.html',
  styleUrls: ['./footer-new.component.css'],
})
export class FooterNewComponent {
  //create a function to add two numbers
  addtwonumbers(a: number, b: number) {
    return a + b;
  }

  //create a new component and write test cases for the function
  //test cases should be written in a separate file
}
