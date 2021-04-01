import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixItemOneComponent } from './item-one.component';

describe('ItemOneComponent', () => {
  let component: FixItemOneComponent;
  let fixture: ComponentFixture<FixItemOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FixItemOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FixItemOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
