import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { EMAIL } from '../../../data';

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

  constructEmail = () => {
    window.open(`mailto:${EMAIL}?subject=Project%20Collaboration&body=Hi%20there,%0A%0AI%20came%20across%20your%20website%20and%20I'm%20interested%20in%20potentially%20collaborating%20on%20a%20project.%20Please%20let%20me%20know%20if%20you're%20available%20to%20chat.%0A%0ABest%20regards,%0A%0A[Your%20Name]`);
  }
}
