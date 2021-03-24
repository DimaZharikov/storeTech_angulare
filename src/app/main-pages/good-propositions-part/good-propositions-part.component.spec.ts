import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodPropositionsPartComponent } from './good-propositions-part.component';

describe('GoodPropositionsPartComponent', () => {
  let component: GoodPropositionsPartComponent;
  let fixture: ComponentFixture<GoodPropositionsPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoodPropositionsPartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodPropositionsPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
