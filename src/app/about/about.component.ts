import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, inject, OnDestroy } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { Subject, takeUntil } from 'rxjs';
import { gridItems } from '../../data';
import { Blog1Component } from './blog1/blog1.component';
import { Blog2Component } from './blog2/blog2.component';

@Component({
  selector: 'about',
  standalone: true,
  imports: [MatGridListModule, Blog1Component, Blog2Component],
  templateUrl: './about.component.html',
})
export class AboutComponent implements OnDestroy {

  items: GridItem[] = gridItems;

  destroyed = new Subject<void>();

constructor() {
  inject(BreakpointObserver)
    .observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge,
    ])
    .pipe(takeUntil(this.destroyed))
    .subscribe(result => {
      
      if (result.breakpoints[Breakpoints.Small]) {
        this.items = gridItems.map(each => {
          return { ...each, cols:4, rows: 2 }
        })
      }
      if (result.breakpoints[Breakpoints.Medium]) {
        this.items = gridItems.map(each => {
          if(each.id === 1) return  {...each, cols: 4 };
          if(each.id === 2) return  {...each, cols: 2 };
          return each;
        })
      }
      if (result.breakpoints[Breakpoints.Large]) {
        this.items = gridItems.map(each => {
          return each;
        })
      }
    });
}

  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }

  

}
