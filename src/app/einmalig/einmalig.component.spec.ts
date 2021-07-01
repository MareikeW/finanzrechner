import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EinmaligComponent } from './einmalig.component';

describe('EinmaligComponent', () => {
  let component: EinmaligComponent;
  let fixture: ComponentFixture<EinmaligComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EinmaligComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EinmaligComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
