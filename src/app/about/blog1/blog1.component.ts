import { Component, Input, input } from '@angular/core';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'blog1',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './blog1.component.html',
  styleUrl: './blog1.component.scss'
})
export class Blog1Component {

  @Input() item !: GridItem;

}
