import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Restaurant, CuisineList } from 'src/app/models/restaurant';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  cuisineList = CuisineList;

  @Input() results: Restaurant[] | null = [];

  constructor() { }

  ngOnInit(): void {
  }

}
