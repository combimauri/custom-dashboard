import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixItemTwoComponent } from './item-two.component';

describe('ItemTwoComponent', () => {
  let component: FixItemTwoComponent;
  let fixture: ComponentFixture<FixItemTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FixItemTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FixItemTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
