import { Component, input } from '@angular/core';
import { NgxRippleComponent } from '@omnedia/ngx-ripple';
import { Card } from '../carousel/carousel.component';
import { NgxDotpatternComponent } from '@omnedia/ngx-dotpattern';

@Component({
  selector: 'approach-card',
  standalone: true,
  imports: [NgxRippleComponent, NgxDotpatternComponent],
  templateUrl: './approach-card.component.html',
  styleUrl: './approach-card.component.scss'
})
export class ApproachCardComponent {
  
  card = input.required<Card>();

}
