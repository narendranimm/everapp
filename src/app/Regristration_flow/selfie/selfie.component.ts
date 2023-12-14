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
  show:boolean=true;
  constructor(private router: Router, private _rf: FormBuilder, private reg: RegisterService, private http: HttpClient, private userdata: UserData) {
    this.imagesend = this._rf.group({
      imageSource: ''
    })
    this.userdata.getuser().then(res => {
      this.logindata = res;
    })
  }


  ngOnInit() { }
  takePicture = async () => {
    debugger
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Prompt
    });

    this.imageSource = image.dataUrl;
    if (/^data:image\/[a-zA-Z]+;base64,/.test(this.imageSource)) {
      const base64Content = this.imageSource.split(';base64,').pop();

      // Create a Blob from the Base64 Image
      this.blob = new Blob([atob(base64Content)], { type: 'image/png' });
      console.log(this.blob)
      this.upload();
    }



  };
  upload() {
    this.reg.uploadFile(this.blob, '1000', 'profilepic').subscribe(res => {
      if (res) {

        this.router.navigate(['/selfie'])
      }
      else {
        this.router.navigate(['/enableloaction'])
      }
    })

  }
  gotonext(){
    this.router.navigate(['/homepage'])
    
  }
}