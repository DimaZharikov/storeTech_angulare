import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestBlogPartComponent } from './latest-blog-part.component';

describe('LatestBlogPartComponent', () => {
  let component: LatestBlogPartComponent;
  let fixture: ComponentFixture<LatestBlogPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatestBlogPartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestBlogPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
