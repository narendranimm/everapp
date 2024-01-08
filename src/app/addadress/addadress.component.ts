import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataservicesService } from '../dataservices.service';
import { UserData } from '../providers/user-data';
import { RegisterService } from '../registration-services/register.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { SnackbarService } from '../snackbar.service';
import { LoadingService } from '../services/loading.service';

@Component({
  selector: 'app-addadress',
  templateUrl: './addadress.component.html',
  styleUrls: ['./addadress.component.scss'],
})
export class AddadressComponent  implements OnInit {
addressForm!:FormGroup;
selectedChip: number=3509;
logindata!: any;
userid: any;
  addressid:any;

  constructor(private loadingservice:LoadingService,
    private _af:FormBuilder,private userdata: UserData ,private router:Router,
    private _ad:RegisterService,private route:ActivatedRoute,
    private snackbarService: SnackbarService) { 
    let id= route.snapshot.params["id"];
    console.log("this is addresis value = " + this.addressid);
    if(id !=0){
      this.getAddressByID(id)
    }
    this.userdata.getuser().then(res => {
      if (res !== null) {
    this.userid = res.UserID;
      } else {
        console.log('Data is null. Handle accordingly.');
      }
    })
  this.addressForm = this._af.group({
    Address1:'',
    Address2:'',
    Landmark:'',
     LinkID:this.userid,
     AddressType: 3509,
     "AddressID": 0,   
     "HouseNo": "",  
     "City": "",
     "ZipCode": "0",
     "AlternateNo": "",
     "State": "",
     "Country": "",
     "Latitude": 0,
     "Longitude": 0,
     "IsDefault": true,
     "LocationID": "0",
     "NewAddressID": "0"
  })

  }
  items: any= [
    {"name":'Home','id':3509},
    {"name":'Office',	'id':3510},
    {"name":'Other',	'id':3511}
  ];

  selectChip(chip: any) {
    this.selectedChip  = chip.id;
  }
  ngOnInit() {
  


  }
  getAddressByID(id:any){
    this.loadingservice.present('loading')
    this._ad.getaddressBYADID(id).subscribe(
      (res:any)=>{
      if(res){
        this.addressForm.patchValue(res[0]);
        this.selectedChip=res[0].AddressType;
        this.loadingservice.dismissLoader();
        console.log(this.addressForm.value)

      }
    }
      ,(error)=>{
        this.loadingservice.dismissLoader();
      }
    )
  }
saveaddress(){
  this.loadingservice.presentLoading('loading')

this.addressForm.patchValue({
  AddressType: this.selectedChip,
  LinkID:this.userid
  // lastName: 'Doe',
  // set other form controls if needed...
});
   this.addressForm.value;
this._ad.postaddress(this.addressForm.value).subscribe((res)=>{
  if(res){
    this.loadingservice.dismissLoader();
    this.snackbarService.presentSnackbar(res.message,1000,'bottom','success')
    this.router.navigateByUrl('/myaddress')
  }
})
}
}
