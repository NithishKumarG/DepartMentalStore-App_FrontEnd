import { TestBed } from '@angular/core/testing';

import { ProductCategorylistService } from './product-categorylist.service';

describe('ProductCategorylistService', () => {
  let service: ProductCategorylistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductCategorylistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
