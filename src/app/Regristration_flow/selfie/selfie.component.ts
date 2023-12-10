import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { LoadingController, ModalController } from '@ionic/angular';
import { RegisterService } from 'services/registration-flow-services/register.service';
import { NavbarService } from 'src/app/navbar.service';



@Component({
  selector: 'app-selfie',
  templateUrl: './selfie.component.html',
  styleUrls: ['./selfie.component.scss'],
})
export class SelfieComponent  implements OnInit {
  imagesend!:FormGroup;
  croppedImage: any;
  imgurl:string=''
  imageSource:any;
  imageUrl:any
  data:any
  constructor( private _rf: FormBuilder,private reg: RegisterService,private http:HttpClient) { 
   this.imagesend=this._rf.group({
    Token:''
   })
  }
  imgFile:any

  ngOnInit() {}
  takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.DataUrl,
      source:CameraSource.Prompt
    });
   
   this.imageSource=image.dataUrl;

  //  console.log(this.imageSource)
  var imgFile = new File([this.imageSource], 'MyFileName.png');
   console.log(imgFile)

  };
upload(){
  const data = this.imagesend.value
  console.log(this.imagesend.value);
  this.http.post(`https://172.188.80.209:8443/api/members`,data).subscribe((res: any) => {
    this.data = res;
    console.log(JSON.stringify(res))
  })
}





show: boolean = true;  
}
