import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryPartComponent } from './category-part.component';

describe('CategoryPartComponent', () => {
  let component: CategoryPartComponent;
  let fixture: ComponentFixture<CategoryPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryPartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
