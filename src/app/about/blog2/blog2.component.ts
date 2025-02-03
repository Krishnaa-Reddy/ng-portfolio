import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'blog2',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './blog2.component.html',
  styles: [`
    :host {
      --mdc-protected-button-container-color: var(--bg-dark);
    }`]
})
export class Blog2Component {


}
