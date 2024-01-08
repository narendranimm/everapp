import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../registration-services/register.service';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { UserData } from '../providers/user-data';
import { LoadingService } from '../services/loading.service';
import { SnackbarService } from '../snackbar.service';

@Component({
  selector: 'app-myaddress',
  templateUrl: './myaddress.component.html',
  styleUrls: ['./myaddress.component.scss'],
})
export class MyaddressComponent implements OnInit {
  addressdata: any = [];
  address: any;
  addressid: any;
  id!: number;
  userid: any;
  constructor(private _ad: RegisterService,
    private loadingservice: LoadingService, private snackbarService: SnackbarService,
    private route: ActivatedRoute, public alertController: AlertController, private user: UserData,) {

    this.user.getuser().then(res => {
      console.log(res)
      if (res !== null) {
        this.userid = res.UserID;
        this.getAddress(res.UserID)
      } else {
        console.log('Data is null. Handle accordingly.');
      }
    })

  }

  ngOnInit() {


  }
  getAddress(id: number) {
    this.loadingservice.present('loading')

    this._ad.getaddress(id).subscribe((res) => {
      if (res) {

        this.addressdata = res;
        this.loadingservice.dismissLoader();
      }
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

  async presentDeleteAlert(id: number) {
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
            this.delterecrd(id)
            // Call your delete method or perform the deletion here
          },
        },
      ],
    });

    await alert.present();
  }
  delterecrd(id: any) {
    
    this.loadingservice.present('Loading...');
    let data = {
      'LinkID': 0,
      'AddressID': 0,
    }
    data.LinkID = this.userid;
    data.AddressID = id;
    this._ad.deleteaddress(data).subscribe(
      (res: any) => {
        if (res) {
          this.loadingservice.dismissLoader();
          this.snackbarService.presentSnackbar(res.message, 1000, 'bottom', 'success');
          
          this.getAddress(this.userid);
          console.log(res);
        } else {
          this.loadingservice.dismissLoader();
        }
      }, (error) => {
        this.loadingservice.dismissLoader();
      }
    )
  }


}
