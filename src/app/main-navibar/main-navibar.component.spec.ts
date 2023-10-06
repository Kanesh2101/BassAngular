import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainNavibarComponent } from './main-navibar.component';

describe('MainNavibarComponent', () => {
  let component: MainNavibarComponent;
  let fixture: ComponentFixture<MainNavibarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainNavibarComponent]
    });
    fixture = TestBed.createComponent(MainNavibarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
