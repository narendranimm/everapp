import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataservicesService } from '../dataservices.service';
import { UserData } from '../providers/user-data';
import { RegisterService } from '../registration-services/register.service';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-addadress',
  templateUrl: './addadress.component.html',
  styleUrls: ['./addadress.component.scss'],
})
export class AddadressComponent  implements OnInit {
addressForm!:FormGroup;
selectedChip: any;
logindata!: any;
  LinkID: any;
  addressid:any;

  constructor(private _af:FormBuilder,private userdata: UserData ,private _ad:RegisterService,private route:ActivatedRoute) { 
    this.addressid = route.snapshot.params["ID"];
    console.log("this is branchid value = " + this.addressid);
  this.addressForm = this._af.group({
    Address1:'',
    Address2:'',
    Landmark:'',
    optional_address:'',
     LinkID:'',
     "AddressID": 1,
   
     "AddressType": 3509,
     "HouseNo": "123",
  
     "City": "ExampleCity",
     "ZipCode": "12345",
     "AlternateNo": "7890123456",
     "State": "ExampleState",
     "Country": "ExampleCountry",
     "Latitude": 37.7749,
     "Longitude": -122.4194,
     "IsDefault": true,
     "LocationID": "789",
     "NewAddressID": "456"
  })

  }
  items: any= [
    {"name":'Home','id':'3509'},
    {"name":'Office',	'id':'3510'},
    {"name":'Other',	'id':'3511'}
  ];

  selectChip(chip: string) {
    this.selectedChip  === this.selectedChip ? null : chip;
  }
  ngOnInit() {
    this.userdata.getuser().then(res => {
      if (res !== null) {

        this.logindata = res;
        this.LinkID = res.UserID;
        this.addressForm.controls.LinkID.setValue(this.LinkID);
        console.log(this.LinkID)
        console.log(res);
        
      }
    })


  }
  getAddressByID(){
    this._ad.getaddressBYID().subscribe((res:any)=>{
    })
  }
saveaddress(){
  const data = this.addressForm.value;
  console.log(data)
this._ad.postaddress(data).subscribe((res)=>{
  console.log(res)
})
}
}
