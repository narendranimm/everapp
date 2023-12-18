import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { LoadingController, ModalController } from '@ionic/angular';
import { NavbarService } from 'src/app/navbar.service';
import { UserData } from 'src/app/providers/user-data';
import { RegisterService } from 'src/app/registration-services/register.service';



@Component({
  selector: 'app-selfie',
  templateUrl: './selfie.component.html',
  styleUrls: ['./selfie.component.scss'],
})
export class SelfieComponent implements OnInit {
  imagesend!: FormGroup;
  croppedImage: any;
  imgurl: string = ''
  imageSource: any;
  imageUrl: any
  data: any
  logindata: any;
  ProfilePhoto: any;
  fact: any;
  imgFile: any;
  blob: any;
  show: boolean = true;
  istakenpic: boolean=false;
  constructor(private router: Router, private _rf: FormBuilder, private reg: RegisterService, private http: HttpClient, private userdata: UserData) {
    this.imagesend = this._rf.group({
      imageSource: ''
    })
    this.userdata.getuser().then(res => {
      this.logindata = res;
    })
  }


  ngOnInit() {
    this.userdata.getuser().then(res=>{
      console.log(res);
        this.ProfilePhoto=res.ProfilePhoto;
    })
   }
  takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Prompt
    });

    this.imageSource = image.dataUrl;
    const base64Content = this.imageSource.split(';base64,').pop();
    const imageName = this.ProfilePhoto;
    const imageBlob = this.dataURItoBlob(base64Content);
    const imageFile = new File([imageBlob], imageName, { type: 'image/png' });
    console.log(imageFile)
    this.upload(imageFile);
  };
  upload(file: any) {
    this.istakenpic=true;;
    this.reg.uploadFile(file, '1000', 'profilepic').subscribe(res => {
      console.log(res)
      if (res.status == 'true') {
        // this.router.navigate(['/selfie'])
        this.router.navigate(['/homepage'])
      }
      else {
        this.router.navigate(['/enableloaction'])
      }
    })
  }
  dataURItoBlob(dataURI: any) {
    const byteString = window.atob(dataURI);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
      int8Array[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([int8Array], { type: 'image/png' });
    return blob;
  }
  gotonext() {
    if(this.istakenpic){

      this.router.navigate(['/homepage'])
    }
  }
}