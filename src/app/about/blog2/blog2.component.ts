import { Component, Input } from '@angular/core';
import { NgxThreeGlobeComponent } from '@omnedia/ngx-three-globe';

@Component({
  selector: 'blog2',
  standalone: true,
  imports: [NgxThreeGlobeComponent],
  templateUrl: './blog2.component.html',
})
export class Blog2Component {

  @Input() item !: GridItem;

}
