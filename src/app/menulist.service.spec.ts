import { TestBed } from '@angular/core/testing';

import { MenulistService } from './menulist.service';

describe('MenulistService', () => {
  let service: MenulistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenulistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
