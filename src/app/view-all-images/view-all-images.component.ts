import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-view-all-images',
  templateUrl: './view-all-images.component.html',
  styleUrls: ['./view-all-images.component.scss'],
})
export class ViewAllImagesComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}
  @ViewChild(IonContent) content!: IonContent;
}
