import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-capsule-button',
  templateUrl: './capsule-button.component.html',
  styleUrls: ['./capsule-button.component.css'],
})
export class CapsuleButtonComponent {
  @Input() buttonText: string = 'Flexi Button';
  @Input() buttonColor: string = '#F3F9FB';
  @Input() textColor: string = '#000000';
  isDark: boolean = false;

  updateButtonStyles() {
    this.isDark = !this.isDark;
  }
}
