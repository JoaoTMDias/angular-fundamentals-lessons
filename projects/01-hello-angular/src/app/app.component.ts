import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <h1>If you are reading this...</h1>
    <p>Things have worked out well! 🎉</p>
    <ol class="favourites">
      <li>Pink Floyd - The Great Gig in the Sky</li>
      <li>The Longest Day, by Richard Harris</li>
      <li>Amadeus, directed by Miloš Forman</li>
    </ol>
  `,
  styles: `
    .favourites {
      list-style-type: upper-roman;
      padding-left: 20px;
    }
  `,
})
export class AppComponent {}
