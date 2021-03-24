import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewsPartComponent } from './reviews-part.component';

describe('ReviewsPartComponent', () => {
  let component: ReviewsPartComponent;
  let fixture: ComponentFixture<ReviewsPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewsPartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewsPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
