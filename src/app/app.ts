import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
// import { Home } from './home/home';
import { Hero } from './hero/hero';
import { About } from './about/about';
// This is the module that defines the main application component
@Component({
  selector: 'app-root',
  // imports: [RouterOutlet, RouterLink],
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('personal-budget-angular');
}
