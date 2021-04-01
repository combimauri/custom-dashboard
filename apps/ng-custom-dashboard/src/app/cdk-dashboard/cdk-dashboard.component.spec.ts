import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdkDashboardComponent } from './cdk-dashboard.component';

describe('CdkDashboardComponent', () => {
  let component: CdkDashboardComponent;
  let fixture: ComponentFixture<CdkDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdkDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CdkDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
