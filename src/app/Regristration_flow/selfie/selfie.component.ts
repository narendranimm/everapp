import { Component, OnInit, ViewChild } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { LoadingController, ModalController } from '@ionic/angular';
import { NavbarService } from 'src/app/navbar.service';



@Component({
  selector: 'app-selfie',
  templateUrl: './selfie.component.html',
  styleUrls: ['./selfie.component.scss'],
})
export class SelfieComponent  implements OnInit {
  croppedImage: any;
  imgurl:string=''
  imageSource:any;

  constructor() { 
   
  }

  ngOnInit() {}
  takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.DataUrl,
      source:CameraSource.Prompt
    });
   
   this.imageSource=image.dataUrl;
 
   console.log(this.imageSource)
  };
  
 
 


show: boolean = true;  
}
