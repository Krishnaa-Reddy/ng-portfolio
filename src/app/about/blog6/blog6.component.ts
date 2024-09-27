import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'blog6',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './blog6.component.html',
  styles: [`
    :host {
      --mdc-protected-button-container-color: var(--bg-dark);
    }`]
})
export class Blog6Component {

  @Input() item !: GridItem;

}
