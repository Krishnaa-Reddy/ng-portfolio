import { NgClass, NgFor, NgStyle } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApproachCardComponent } from '../approach-card/approach-card.component';


export interface Card{
  title: string;
  content: string;
}

@Component({
  selector: 'carousel',
  standalone: true,
  imports: [NgFor, NgClass, NgStyle, ApproachCardComponent],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent implements OnInit, OnDestroy {
  cards: Card[] = [
    { title: 'Approach1', content: 'This is the content of card 1' },
    { title: 'Approach2', content: 'This is the content of card 2' },
    { title: 'Approach3', content: 'This is the content of card 3' },
    { title: 'Approach4', content: 'This is the content of card 4' },
    { title: 'Approach5', content: 'This is the content of card 5' },
    { title: 'Approach6', content: 'This is the content of card 6' },
    { title: 'Approach7', content: 'This is the content of card 7' },
    { title: 'Approach8', content: 'This is the content of card 8' },
    { title: 'Approach9', content: 'This is the content of card 9' },
  ];

  currentIndex = 0;
  private autoPlayInterval: any;

  ngOnInit(): void {
    this.startAutoPlay();
  }

  ngOnDestroy(): void {
    this.stopAutoPlay();
  }

  startAutoPlay(): void {
    this.autoPlayInterval = setInterval(() => {
      this.next();
    }, 1000000);
  }

  stopAutoPlay(): void {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
    }
  }

  goToSlide(index: number): void {
    this.currentIndex = index;
    this.stopAutoPlay();
    this.startAutoPlay(); 
  }


  next(): void {
    this.currentIndex = (this.currentIndex + 1) % (this.cards.length - 2);
  }

  get visibleDots(): number[] {
    return Array(this.cards.length - 2).fill(0).map((_, i) => i);
  }

}
