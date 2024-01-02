import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {ProgressSpinnerMode, MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSliderModule} from '@angular/material/slider';

@Component({
  selector: 'app-kycstatus',
  templateUrl: './kycstatus.component.html',
  styleUrls: ['./kycstatus.component.scss'],
})
export class KycstatusComponent  implements OnInit {
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';
  value = 90;
  constructor() { }

  ngOnInit() {}

}
