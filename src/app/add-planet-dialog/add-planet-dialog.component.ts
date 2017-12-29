import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-add-planet-dialog',
  templateUrl: './add-planet-dialog.component.html',
  styleUrls: ['./add-planet-dialog.component.css']
})
export class AddPlanetDialogComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private dialogRef: MatDialogRef<AddPlanetDialogComponent>) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: '',
      rotation_period: '',
      orbital_period: '',
      diameter: '',
      climate: '',
      gravity: '',
      terrain: '',
      surface_water: '',
      population: '',
      residents: '',
      films: ''
    });
  }

  submit(form) {
    if (form.value.name) {
      this.dialogRef.close(form.value);
    }
  }

}
