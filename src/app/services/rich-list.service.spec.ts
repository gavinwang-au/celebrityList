import { TestBed, inject } from '@angular/core/testing';

import { RichListService } from './rich-list.service';

describe('RichListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RichListService]
    });
  });

  it('should be created', inject([RichListService], (service: RichListService) => {
    expect(service).toBeTruthy();
  }));
});
