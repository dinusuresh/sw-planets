import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-view-planet-dialog',
  templateUrl: './view-planet-dialog.component.html',
  styleUrls: ['./view-planet-dialog.component.css']
})
export class ViewPlanetDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ViewPlanetDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit() {
  }

}
