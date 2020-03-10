import { Component } from '@angular/core';

@Component({
  selector: 'ngrx-shoes-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dashboard';

  links = [{ path: './shoes', icon: 'work', title: 'Shoes' }];
}
