import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IonAccordionGroup } from '@ionic/angular';
import { Observable, Subscription, interval, map } from 'rxjs';

@Component({
  selector: 'app-time-details',
  templateUrl: './time-details.component.html',
  styleUrls: ['./time-details.component.scss'],
})
export class TimeDetailsComponent  {
show=false;
}
