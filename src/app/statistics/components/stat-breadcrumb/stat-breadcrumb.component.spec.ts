import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatBreadcrumbComponent } from './stat-breadcrumb.component';

describe('StatBreadcrumbComponent', () => {
  let component: StatBreadcrumbComponent;
  let fixture: ComponentFixture<StatBreadcrumbComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatBreadcrumbComponent]
    });
    fixture = TestBed.createComponent(StatBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
