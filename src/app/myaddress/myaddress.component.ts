import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../registration-services/register.service';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-myaddress',
  templateUrl: './myaddress.component.html',
  styleUrls: ['./myaddress.component.scss'],
})
export class MyaddressComponent  implements OnInit {
data:any;
address:any;
addressid:any;
  constructor(private _ad:RegisterService,private route: ActivatedRoute,public alertController: AlertController) { 
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
          this.delterecrd()
          // Call your delete method or perform the deletion here
        },
      },
    ],
  });

  await alert.present();
}
  delterecrd() {
    this._ad.deleteaddress(this.data).subscribe((res)=>{
        console.log(res)
    })
  }


}
