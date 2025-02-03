import { Component } from '@angular/core';
import { NgxMarqueeComponent } from '@omnedia/ngx-marquee';
import { companies, techs } from '../../data';

@Component({
  selector: 'tech-stack',
  standalone: true,
  imports: [NgxMarqueeComponent],
  templateUrl: './tech-stack.component.html',
  styleUrl: './tech-stack.component.scss'
})
export class TechStackComponent {

  companies = companies;
  techs = techs;

}
