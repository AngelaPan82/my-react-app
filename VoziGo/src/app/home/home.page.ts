import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  fromCity: string = '';
  toCity: string = '';

  constructor(private navController: NavController) { }

  searchRides() {
    if (this.fromCity && this.toCity) {
      // Navigate to the search page with selected cities
      this.navController.navigateForward(`/search-results`, {
        queryParams: {
          from: this.fromCity,
          to: this.toCity
        }
      });
    } else {
      // Alert the user to select cities
      alert('Please select both cities.');
    }
  }
}
