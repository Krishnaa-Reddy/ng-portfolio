import { NgStyle } from '@angular/common';
import { Component, ElementRef, HostListener, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'spotlight',
  standalone: true,
  imports: [NgStyle],
  template: `
    <div class="spotlight-container" [ngStyle]="containerStyle">
      <div class="spotlight" [ngStyle]="spotlightStyle"></div>
      <ng-content></ng-content>
    </div>
`,
  styles: [`
    .spotlight-container {
      position: relative;
      backdrop-filter: blur(10px);
      background-color: rgba(30, 41, 59, 0.4);
    }
    .spotlight {
      position: absolute;
      pointer-events: none;
      transition: opacity 0.3s ease;
      mix-blend-mode: screen;
    }
  `]
})

export class SpotlightComponent implements OnInit, OnDestroy {
  //Best practices: Having default input values
  @Input() color: string = 'rgba(255, 255, 255, 0.1)';
  @Input() size: number = 300;
  @Input() enabled: boolean = true;

  containerStyle: { [key: string]: string } = {};
  spotlightStyle: { [key: string]: string } = {};
  private mouseX: number = 0;
  private mouseY: number = 0;
  private animationFrameId: number | null = null;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.updateContainerStyle();
    this.animateSpotlight();
  }

  ngOnDestroy() {
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
    }
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (!this.enabled) return;
    const rect = this.elementRef.nativeElement.getBoundingClientRect();
    this.mouseX = event.clientX - rect.left;
    this.mouseY = event.clientY - rect.top;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    if (!this.enabled) return;
    this.renderer.setStyle(this.elementRef.nativeElement.querySelector('.spotlight'), 'opacity', '0');
  }

  private updateContainerStyle() {
    this.containerStyle = {
      width: '100%',
      height: '100%',
    };
  }

  private animateSpotlight() {
    if (!this.enabled) {
      this.renderer.setStyle(this.elementRef.nativeElement.querySelector('.spotlight'), 'opacity', '0');
      this.animationFrameId = requestAnimationFrame(() => this.animateSpotlight());
      return;
    }


    const spotlight = this.elementRef.nativeElement.querySelector('.spotlight');
    this.renderer.setStyle(spotlight, 'left', `${this.mouseX - this.size / 2}px`);
    this.renderer.setStyle(spotlight, 'top', `${this.mouseY - this.size / 2}px`);
    this.renderer.setStyle(spotlight, 'width', `${this.size}px`);
    this.renderer.setStyle(spotlight, 'height', `${this.size}px`);
    this.renderer.setStyle(spotlight, 'borderRadius', '50%');
    this.renderer.setStyle(spotlight, 'background', `radial-gradient(circle at center, ${this.color} 0%, transparent 70%)`);
    this.renderer.setStyle(spotlight, 'opacity', '1');

    this.animationFrameId = requestAnimationFrame(() => this.animateSpotlight());
  }
}
