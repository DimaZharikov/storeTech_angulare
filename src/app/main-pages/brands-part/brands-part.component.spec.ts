import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandsPartComponent } from './brands-part.component';

describe('BrandsPartComponent', () => {
  let component: BrandsPartComponent;
  let fixture: ComponentFixture<BrandsPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandsPartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandsPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
