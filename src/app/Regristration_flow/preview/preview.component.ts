import { Component, Input, OnInit, Output } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss'],
})
export class PreviewComponent  implements OnInit {
@Output() imageSource:any;
 
  constructor() { }

  ngOnInit() {
    console.log(this.imageSource)
  }


}
