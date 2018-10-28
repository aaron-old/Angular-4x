import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

interface State {
  name: string;
  abbrev: string;
}

@Component({
  selector: 'roms-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  states: State[] = [
    { name: 'Arizona', abbrev: 'AZ' },
    { name: 'California', abbrev: 'CA' },
    { name: 'Colorado', abbrev: 'CO' },
    { name: 'New York', abbrev: 'NY' },
    { name: 'Pennsylvania', abbrev: 'PA' }
  ];

  form = new FormGroup({
    state: new FormControl(this.states[0]),
    name: new FormControl('')
  });

  constructor() {}

  ngOnInit() {}
  handleGetValues() {
    console.log(this.form.value);
  }
}
