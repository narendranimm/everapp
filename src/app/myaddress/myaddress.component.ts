import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../registration-services/register.service';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { UserData } from '../providers/user-data';

@Component({
  selector: 'app-myaddress',
  templateUrl: './myaddress.component.html',
  styleUrls: ['./myaddress.component.scss'],
})
export class MyaddressComponent  implements OnInit {
data:any;
address:any;
addressid:any;
  id!: number;
  constructor(private _ad:RegisterService,private route: ActivatedRoute,public alertController: AlertController,private user: UserData,) { 
    this.addressid = route.snapshot.params["ID"];
    console.log("this is branchid value = " + this.addressid);

 
  }

  ngOnInit() {

    this.getAddress()
  }
getAddress(){
  this._ad.getaddress(this.data).subscribe((res)=>{
    this.data=res
   console.log(res)
  })
}

alertButtons = ['Action'];

// showAlert() {

//   this.alertController.create({
//     header: 'Delete address',
//     subHeader: 'Are you sure you want to delete this address?',
//     message: 'This is an alert message.',
//     img:'',
//     buttons: ['OK']
//   }).then(res => {

//     res.present();

//   });

// }

async presentDeleteAlert() {
  const alert = await this.alertController.create({
    header: 'Confirm Delete',
    message: 'Are you sure you want to delete this data?',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        },
      },
      {
        text: 'Delete',
        handler: () => {
          console.log('Delete clicked');
          this.delterecrd(this.id)
          // Call your delete method or perform the deletion here
        },
      },
    ],
  });

  await alert.present();
}
  delterecrd(id:number) {
    this._ad.deleteaddress(id).subscribe((res)=>{
        console.log(res)
    })
  }


}
