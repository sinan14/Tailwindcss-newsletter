import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [],
})
export class AppComponent {
  title = 'ang-newsleltter';
  lis = [
    ' Product discover and building what matters',
    'Measuring to ensure updates are a success',
    'And much more!',
  ];
  successState = false;
  email = '';
  validEmail = true;
  subscribe() {
    this.validEmail = Boolean(
      String(this.email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    );
    if (this.validEmail) this.successState = !this.successState;
  }
}
