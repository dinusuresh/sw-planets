import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import {
  MatToolbarModule, MatCardModule, MatProgressBarModule, MatButtonModule, MatIconModule,
  MatDialogModule, MatFormFieldModule, MatInputModule
} from '@angular/material';
import {SwapiService} from './services/swapi.service';
import { AddPlanetDialogComponent } from './add-planet-dialog/add-planet-dialog.component';
import { ViewPlanetDialogComponent } from './view-planet-dialog/view-planet-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    AddPlanetDialogComponent,
    ViewPlanetDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatCardModule,
    MatProgressBarModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [ SwapiService ],
  bootstrap: [AppComponent],
  entryComponents: [ AddPlanetDialogComponent, ViewPlanetDialogComponent ]
})
export class AppModule { }
