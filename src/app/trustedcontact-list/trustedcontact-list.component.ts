import { Component, OnInit } from '@angular/core';
import { UserData } from '../providers/user-data';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingService } from '../services/loading.service';
import { RegisterService } from '../registration-services/register.service';
import { SnackbarService } from '../snackbar.service';

@Component({
  selector: 'app-trustedcontact-list',
  templateUrl: './trustedcontact-list.component.html',
  styleUrls: ['./trustedcontact-list.component.scss'],
})
export class TrustedcontactListComponent implements OnInit {
  userid: any;
  users: any;
  constructor(private userdata: UserData, private router: Router,
    private _ad: RegisterService, private route: ActivatedRoute,
    private loadingservice: LoadingService,
    private snackbarService: SnackbarService) {

    this.userdata.getuser().then(res => {
      this.userid = res.UserID;

      this.getlist();

    })
  }


  ngOnInit() {
  }
  getlist() {
    this.loadingservice.simpleLoader('Loading...')

    this._ad.getTrustedaddress(this.userid).subscribe(res => {
      this.users = res;
      this.loadingservice.dismissLoader();


    }, (error)=>{
      this.loadingservice.dismissLoader();
    }
    )
  }
  deleteSpace(f: any) {
    this.loadingservice.simpleLoader('Loading...')

    f.IsActive = 0;
    this._ad.saveTrustedaddress(f).subscribe(res => {
      console.log(res)
      this.loadingservice.dismissLoader();
      this.snackbarService.presentSnackbar('Record Removed Successfully', 1000, 'bottom', 'success')
      this.getlist()
    },
    (error)=>{
      this.loadingservice.dismissLoader();
    }
    )
  }
}
