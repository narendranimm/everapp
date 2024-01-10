import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RegisterService } from '../registration-services/register.service';
import { UserData } from '../providers/user-data';
import { ActivatedRoute, Router } from '@angular/router';
import { SnackbarService } from '../snackbar.service';
import { LoadingService } from '../services/loading.service';

@Component({
  selector: 'app-trustedcontact',
  templateUrl: './trustedcontact.component.html',
  styleUrls: ['./trustedcontact.component.scss'],
})
export class TrustedcontactComponent  implements OnInit {
   trustedForm!:FormGroup
   id:number=0;
  userid: any;
  constructor(private _rf:FormBuilder,private userdata: UserData ,private router:Router,
    private _ad:RegisterService,private route:ActivatedRoute,private loadingservice:LoadingService,
    private snackbarService: SnackbarService) { 
    this.id= route.snapshot.params["id"];
    this.userdata.getuser().then(res=>{
      this.userid=res.UserID;
    
      
    })
  

    this.trustedForm=this._rf.group({
        FirstName:'',
        LastName:'',
        MobileNo:'',
        MemberType:0
      })
    }

    ngOnInit() {}

    savecontact(){
this.loadingservice.simpleLoader('Loading...')
        const data=this.trustedForm.value;
        data.UserID=this.userid;
        data.IsActive=1;
        console.log(data)
        this._ad.saveTrustedaddress(data).subscribe(
          res=>{
          this.loadingservice.dismissLoader();
          if(res){
            this.snackbarService.presentSnackbar(res.message,1000,'bottom','success')

          }else{
            this.snackbarService.presentSnackbar(res.message,1000,'bottom','success')

          }
        },(error)=>{
          this.loadingservice.dismissLoader();
        }
        )
       
    }


  }
