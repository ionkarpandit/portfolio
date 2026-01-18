import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BaseLayout } from './components/base-layout/base-layout';
@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    BaseLayout
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('web-app');
}
