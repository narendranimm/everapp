import { Component, OnInit } from '@angular/core';
import { GoogleMap } from '@capacitor/google-maps';

@Component({
  selector: 'app-directions',
  templateUrl: './directions.component.html',
  styleUrls: ['./directions.component.scss'],
})
export class DirectionsComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  apiKey = 'AIzaSyCU4W4iQLV5ydrW3UxZncI_JdLi1EsKH5A';

 mapRef = document.getElementById('map');



}
