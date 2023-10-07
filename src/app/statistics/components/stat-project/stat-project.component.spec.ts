import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatProjectComponent } from './stat-project.component';

describe('StatProjectComponent', () => {
  let component: StatProjectComponent;
  let fixture: ComponentFixture<StatProjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatProjectComponent]
    });
    fixture = TestBed.createComponent(StatProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
