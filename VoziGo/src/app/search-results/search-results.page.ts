import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface Ride {
  from: string;
  to: string;
  driver: string;
  price: string;
}

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.page.html',
  styleUrls: ['./search-results.page.scss'],
})
export class SearchResultsPage implements OnInit {

  fromCity: string = '';
  toCity: string = '';

  // Explicitly define the type of rides array
  availableRides: Ride[] = [
    { from: 'Skopje', to: 'Veles', driver: 'John Doe', price: '8 EUR' },
    { from: 'Skopje', to: 'Kavadarci', driver: 'Jane Smith', price: '10 EUR' },
    // You can add more rides or fetch this data dynamically from a database
  ];

  filteredRides: Ride[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.fromCity = params['from'];
      this.toCity = params['to'];

      // Filter available rides based on selected cities
      this.filteredRides = this.availableRides.filter(ride =>
        ride.from === this.fromCity && ride.to === this.toCity
      );
    });
  }
}
