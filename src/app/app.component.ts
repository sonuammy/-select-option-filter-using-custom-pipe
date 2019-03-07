import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  city: any;
  citySelect: any[] = [
    { cityName: "Bangalore" },
    { cityName: "Pune" },
    { cityName: "Mumbai" },
    { cityName: "Delhi" },
    { cityName: "Kolkata" }
  ]
}

