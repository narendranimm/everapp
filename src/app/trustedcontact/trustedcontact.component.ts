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
  constructor(private _rf:FormBuilder,private userdata: UserData ,private router:Router,
    private _ad:RegisterService,private route:ActivatedRoute,private loadingservice:LoadingService,
    private snackbarService: SnackbarService) { 
    this.trustedForm=this._rf.group({
        fname:'',
        lname:'',
        mobile:''
      })
    }

    ngOnInit() {}

    savecontact(){
        const data=this.trustedForm.value;
        console.log(data)
       
    }


  }
