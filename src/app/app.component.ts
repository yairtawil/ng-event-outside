import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  events = [
    {
      listener: 'click',
      class: 'primary',
      show: false
    },
    {
      listener: 'pointermove',
      class: 'success',
      show: false
    },
    {
      listener: 'mousedown',
      class: 'info',
      show: false
    },
    {
      listener: 'mousewheel',
      class: 'danger',
      show: false
    }
  ];
}
