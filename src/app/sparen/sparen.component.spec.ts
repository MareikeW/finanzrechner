import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SparenComponent } from './sparen.component';

describe('SparenComponent', () => {
  let component: SparenComponent;
  let fixture: ComponentFixture<SparenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SparenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SparenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
