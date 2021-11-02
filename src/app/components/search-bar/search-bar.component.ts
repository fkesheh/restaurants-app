import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DefaultSearchValues, SearchInterface } from 'src/app/models/search';
import Validators from 'src/app/helpers/validation-functions';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  @Output() searchChanged = new EventEmitter<SearchInterface>();

  search: SearchInterface = { ...DefaultSearchValues }

  constructor() {
  }

  ngOnInit(): void {

  }

  resetFilters() {
    this.search = { ...DefaultSearchValues }
  }

  changesHandler() {

    try {
      if(this.search.distance) {
        Validators.inRange('Distance', this.search.distance, 1, 10);
      }
      if(this.search.rating) {
        Validators.inRange('Rating', this.search.rating, 1, 5);
      }
      if(this.search.price) {
        Validators.inRange('Price', this.search.price, 10, 50);
      }
    }
    catch (e) {
      alert(e)
    }

    this.searchChanged.emit(this.search)
  }


}
