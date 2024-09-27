import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyApproachesComponent } from './my-approaches.component';

describe('MyApproachesComponent', () => {
  let component: MyApproachesComponent;
  let fixture: ComponentFixture<MyApproachesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyApproachesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyApproachesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
