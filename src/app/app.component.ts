import {Component, OnInit} from '@angular/core';
import {SwapiService} from './services/swapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  planets: Object[];
  apiUrl: string;
  loading: boolean;

  constructor(private swapi: SwapiService) {
    this.planets = [];
    this.apiUrl = '';
    this.loading = false;
  }

  ngOnInit() {
    this.getPlanetsList();
  }

  addPlanet() {
    this.swapi.addPlanet();
  }

  openPlanet(i) {
    console.log(i);
  }

  getPlanetsList() {
    this.loading = true;
    this.swapi.getPlanetsList(this.apiUrl).subscribe(
      (result) => {
        this.loading = false;
        this.planets = this.planets.concat(result.results);
        this.apiUrl = result.next;
      }
    );
  }

  deletePlanet(index) {
    // Since the api does not support delete operation, we perform it locally
    this.planets.splice(index, 1);
  }
}
