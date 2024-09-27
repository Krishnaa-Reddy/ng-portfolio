import { Component, Input } from '@angular/core';

@Component({
  selector: 'blog4',
  standalone: true,
  imports: [],
  templateUrl: './blog4.component.html',
  styleUrl: './blog4.component.scss'
})
export class Blog4Component {

  @Input() item !: GridItem;
  
}
