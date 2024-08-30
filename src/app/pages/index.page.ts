import { Component, signal } from '@angular/core';

import { getPosts } from './get-posts';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <h2>Analog</h2>

    <h3>The fullstack meta-framework for Angular!</h3>

    <p>
      <a href="https://analogjs.org" target="_blank">Docs</a> |
      <a href="https://github.com/analogjs/analog" target="_blank">GitHub</a> |
      <a href="https://github.com/sponsors/brandonroberts" target="_blank"
        >Sponsor</a
      >
    </p>

    <button (click)="increment()">Count {{ count() }}</button>
  `,
  styles: `
    :host {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  `,
})
export default class HomeComponent {
  count = signal(0);

  ngOnInit() {
    getPosts().then(console.log);
  }

  increment() {
    this.count.update(cnt => ++cnt);
  }
}
