import { Component, OnInit, ViewChild } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { IonContent } from '@ionic/angular';
import { UserData } from 'src/app/providers/user-data';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent  implements OnInit {
  @ViewChild(IonContent) content!: IonContent;
  imageSource:any=null;
  loginuser: any;
  profileUrl: any = environment.azimageUrl_pic;

  constructor(private store:UserData) {

    this.store.getuser().then(data=>{
      if(data !== null){
        this.loginuser=data;
        console.log(this.loginuser)
        this.imageSource=this.loginuser.ProfilePhoto;

      }
    })
   }

  ngOnInit() {}
  takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source:CameraSource.Prompt
    });
  
    this.imageSource=image.dataUrl
   console.log(this.imageSource)
  };
  scrollToBottom() {
    // Passing a duration to the method makes it so the scroll slowly
    // goes to the bottom instead of instantly
    this.content.scrollToBottom(500);
  }

  scrollToTop() {
    // Passing a duration to the method makes it so the scroll slowly
    // goes to the top instead of instantly
    this.content.scrollToTop(500);
  }
}
