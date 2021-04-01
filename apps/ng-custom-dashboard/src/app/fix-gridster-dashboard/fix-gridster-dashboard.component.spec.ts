import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixGridsterDashboardComponent } from './fix-gridster-dashboard.component';

describe('FixGridsterDashboardComponent', () => {
  let component: FixGridsterDashboardComponent;
  let fixture: ComponentFixture<FixGridsterDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FixGridsterDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FixGridsterDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
