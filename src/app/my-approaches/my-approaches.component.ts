import { Component } from '@angular/core';
import { ApproachCardComponent } from './approach-card/approach-card.component';
import { CarouselComponent } from './carousel/carousel.component';


@Component({
  selector: 'my-approaches',
  standalone: true,
  imports: [ApproachCardComponent, CarouselComponent],
  templateUrl: './my-approaches.component.html',
  styleUrl: './my-approaches.component.scss'
})
export class MyApproachesComponent {

}
