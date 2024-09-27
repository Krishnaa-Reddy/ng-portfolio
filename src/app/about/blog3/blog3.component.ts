import { Component, Input } from '@angular/core';
import { NgxSwapyComponent } from '@omnedia/ngx-swapy';

@Component({
  selector: 'blog3',
  standalone: true,
  imports: [NgxSwapyComponent],
  templateUrl: './blog3.component.html',
})
export class Blog3Component {

  @Input() item !: GridItem;

  techStacks = [
    'Angular',
    'Svelte',
    'SvelteKit',
    'Next.js',
    'NestJS',
    'Nuxt.js',
    'ReactJs'
  ]

}
