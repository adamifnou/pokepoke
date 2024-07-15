import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {PokeComponent} from './poke/poke.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PokeComponent],
  template: `
    <main>
      <header class="brand-name">
        <img
          class="brand-logo"
          src="https://www.1min30.com/wp-content/uploads/2017/06/Symbole-Pokemon.jpg"
          alt="logo"
          aria-hidden="true"
          style="width: 120px;"
        />
      </header>
      <section><app-poke></app-poke></section>
    </main>
  `,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'myApp';
}
