import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  clickCount = 0;
  count = 0;
  dudu() {
    this.count = this.count + 1;
  }
}
