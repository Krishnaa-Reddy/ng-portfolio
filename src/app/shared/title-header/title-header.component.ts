import { Component, input } from '@angular/core';

@Component({
  selector: 'title-header',
  standalone: true,
  imports: [],
  templateUrl: './title-header.component.html',
  styleUrl: './title-header.component.scss'
})
export class TitleHeaderComponent {
  titleHeader = input.required<TitleHeader>();
}
