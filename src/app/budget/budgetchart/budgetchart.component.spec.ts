import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetchartComponent } from './budgetchart.component';

describe('BudgetchartComponent', () => {
  let component: BudgetchartComponent;
  let fixture: ComponentFixture<BudgetchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BudgetchartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
