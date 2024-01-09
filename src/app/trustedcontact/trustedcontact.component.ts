import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-trustedcontact',
  templateUrl: './trustedcontact.component.html',
  styleUrls: ['./trustedcontact.component.scss'],
})
export class TrustedcontactComponent  implements OnInit {
   trustedForm!:FormGroup
  constructor(private _rf:FormBuilder) { 
    this.trustedForm=this._rf.group({
        fname:'',
        lname:'',
        mobile:''
      })
    }

    ngOnInit() {}

  }
