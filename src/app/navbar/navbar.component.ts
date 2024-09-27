import { ViewportScroller } from '@angular/common';
import { navItems } from './../../data/index';
import { routes } from './../app.routes';
import { Component, effect, ElementRef, inject, OnInit, signal, viewChild } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterLinkWithHref } from '@angular/router';
import { animate, scroll } from 'motion';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterLinkWithHref],
  templateUrl: './navbar.component.html',
  styles: [`
    :host {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    `]
})
export class NavbarComponent implements OnInit{

  navItems = navItems;

  navbarVisible = signal(true);

  navbar = viewChild.required<ElementRef>('navbar');

  viewportScroller = inject(ViewportScroller);

  ngOnInit(): void {
    scroll((scrollInfo) => {
      const pos = scrollInfo.y.current;
      const velocity = scrollInfo.y.velocity;
      
      if(Math.abs(velocity) > 30) {
        if (pos < 100 || velocity < 0) {
          this.navbarVisible.set(true);
        } else {
          this.navbarVisible.set(false);
        }
      }
    })
  }

  animateNav = effect(() => {

    if (this.navbarVisible()) {
      animate(this.navbar().nativeElement, {
        y: 0,
      }, { duration: 0.8 });
    } else {
      animate(this.navbar().nativeElement, {
        y: -100,
      }, { duration: 0.8 });
    }

  });

  scrollToAnchor(elementID: string) {

    console.log(elementID);
    
    this.viewportScroller.scrollToAnchor(elementID)
  }
    


}
