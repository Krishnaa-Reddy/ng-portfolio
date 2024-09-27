import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproachCardComponent } from './approach-card.component';

describe('ApproachCardComponent', () => {
  let component: ApproachCardComponent;
  let fixture: ComponentFixture<ApproachCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApproachCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApproachCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
