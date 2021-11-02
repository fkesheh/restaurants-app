import { TestBed } from '@angular/core/testing';
import { HttpClientModule, HttpClient  } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';


import { RestaurantService } from './restaurant.service';

describe('RestaurantService', () => {
  let service: RestaurantService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [HttpClient]
    });
    service = TestBed.inject(RestaurantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
