import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Restaurant } from 'src/app/models/restaurant';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  pristine = true;
  searchResults = new Observable<Restaurant[]>();

  constructor(private restaurantService: RestaurantService) { }


  ngOnInit(): void {
  }

  searchChanged(value:any) {
    this.pristine = false;
    this.searchResults = this.restaurantService.search(value);
  }
}
