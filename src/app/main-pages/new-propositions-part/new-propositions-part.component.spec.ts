import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPropositionsPartComponent } from './new-propositions-part.component';

describe('NewPropositionsPartComponent', () => {
  let component: NewPropositionsPartComponent;
  let fixture: ComponentFixture<NewPropositionsPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewPropositionsPartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPropositionsPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
