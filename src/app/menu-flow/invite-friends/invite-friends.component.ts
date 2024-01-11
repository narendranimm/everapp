import { Component, OnInit } from '@angular/core';
import { Camera } from '@capacitor/camera';
import { Share } from '@capacitor/share';
@Component({
  selector: 'app-invite-friends',
  templateUrl: './invite-friends.component.html',
  styleUrls: ['./invite-friends.component.scss'],
})
export class InviteFriendsComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}
  share(){
    if(navigator){
      navigator.share({
        title:'madhapur ev station',
        url:'https://everenergies.in/'
      }).then(()=>{
        console.log("thanks for sharing")
      }).catch((err:any)=>{
        console.log(err)
      })
    }
  }

  // await Share.share({
  //   title: 'See cool stuff',
  //   text: 'Really awesome thing you need to see right meow',
  //   url: 'http://ionicframework.com/',
  //   dialogTitle: 'Share with buddies',
  // });
  
 
//   async share(){ await Share.share({
//     text: 'Really awesome thing you need to see right meow',
//   });
// }
  shares(){
     Share.share({
          text: 'Really awesome thing you need to see right meow',
        });
  }
  // // Share url only
  // await Share.share({
  //   url: 'http://ionicframework.com/',
  // });
  
  // // Share local file using url parameter
  // const photo = await Camera.getPhoto(options);
  // await Share.share({
  //   url: photo.path,
  // });
  
  // // Share multiple files using files parameter
  // const { photos } = await Camera.pickImages(options);
  // await Share.share({
  //   files: photos.map(photo => photo.path!),
  // });

}
