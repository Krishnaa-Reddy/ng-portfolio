import { testimonials } from './../../data/index';
import { Component } from '@angular/core';
import { NgxMarqueeComponent } from '@omnedia/ngx-marquee';
import { companies } from '../../data';
import { NgFor } from '@angular/common';

@Component({
  selector: 'testimonials',
  standalone: true,
  imports: [NgxMarqueeComponent, NgFor],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {

  companies = companies;
  testimonials = testimonials;

}
