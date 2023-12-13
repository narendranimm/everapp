import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { LoadingController, ModalController } from '@ionic/angular';
import { RegisterService } from 'services/registration-flow-services/register.service';
import { NavbarService } from 'src/app/navbar.service';
import { UserData } from 'src/app/providers/user-data';



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
  logindata:any;
  ProfilePhoto:any;
  fact:any;
  imgFile:any
  constructor(private router: Router, private _rf: FormBuilder,private reg: RegisterService,private http:HttpClient,private userdata:UserData) { 
   this.imagesend=this._rf.group({
    imageSource:''
   })
   this.userdata.getuser().then(res=>{
    this.logindata=res;
    console.log(this.logindata)
  })
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
  var imgFile = new File([this.imageSource], 'MyFileName.png');
   console.log(imgFile)

  };
upload(){
  console.log(this.imagesend.value)
  if(!this.imagesend.valid){
  this.router.navigate(['/selfie'])
  }else{
    this.router.navigate(['/enableloaction'])
  }
}
show: boolean = true;  
}
