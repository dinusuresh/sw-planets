import {Component, OnInit} from '@angular/core';
import {SwapiService} from './services/swapi.service';
import {AddPlanetDialogComponent} from './add-planet-dialog/add-planet-dialog.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {ViewPlanetDialogComponent} from './view-planet-dialog/view-planet-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  planets: Object[];
  apiUrl: string;
  loading: boolean;
  addPlanetDialogRef: MatDialogRef<AddPlanetDialogComponent>;
  viewPlanetDialogRef: MatDialogRef<ViewPlanetDialogComponent>;

  constructor(private swapi: SwapiService, public dialog: MatDialog) {
    this.planets = [];
    this.apiUrl = '';
    this.loading = false;
  }

  ngOnInit() {
    this.getPlanetsList();
  }

  addPlanet() {
    this.addPlanetDialogRef = this.dialog.open(AddPlanetDialogComponent, {
      width: '400px'
    });

    this.addPlanetDialogRef.afterClosed().subscribe(result => {
      if (result.name) {
        this.planets.push(result);
      }
    })
  }

  viewPlanet(i) {
    this.viewPlanetDialogRef = this.dialog.open(ViewPlanetDialogComponent, {
      data: {planet: this.planets[i]}
    });
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
