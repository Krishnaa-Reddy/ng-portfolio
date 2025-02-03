import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgxMarqueeComponent } from '@omnedia/ngx-marquee';
import { techs } from './../../data/index';

type TechType = 'frontend' | 'backend' | 'others' | 'all';

@Component({
  selector: 'tech-stack',
  standalone: true,
  imports: [NgxMarqueeComponent, MatTooltipModule, CommonModule],
  templateUrl: './tech-stack.component.html',
  styleUrl: './tech-stack.component.scss'
})
export class TechStackComponent {
  private techs = signal<Tech[]>(techs);

  type = signal<TechType>('all');

  types : {value: TechType, label: string, classes?: string}[] = [
    { value: 'all', label: 'All', classes: 'rounded-l-3xl' },
    { value: 'frontend', label: 'Frontend' },
    { value: 'backend', label: 'Backend'},
    { value: 'others', label: 'Others', classes: 'rounded-r-3xl' },
  ];

  techsFiltered = computed(() => {
    const techs = this.techs();
    const type = this.type();

    if(type === 'all') {
      return techs;
    }
    
    return techs.filter(tech => tech.type === type);
  });

  updateTech(type: TechType) {
    this.type.set(type);
  }

}
