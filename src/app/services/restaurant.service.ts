import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Restaurant } from '../models/restaurant';
import { SearchInterface } from '../models/search';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {


  constructor(private httpClient: HttpClient) { }

  search(params: SearchInterface): Observable<Restaurant[]> {
    const restaurants = this.httpClient.post<Restaurant[]>(environment.restaurantBackend + '/restaurants/search', params);
    return restaurants;
  }
}
