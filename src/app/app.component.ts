import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-todo';

  buttonClicked = () => console.log('Button clicked');

  linkClicked = () => console.log('Link clicked');
}
