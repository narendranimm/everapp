import { Component, ViewChild ,Inject, OnInit} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { CommunicationAllowPermissionComponent } from './communication-allow-permission/communication-allow-permission.component';
import { SocialAuthService } from '@abacritt/angularx-social-login';
import { register } from 'swiper/element/bundle';
import { UserData } from './providers/user-data';


register();
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  value: any;
  




  constructor(
    public dialog: MatDialog,private authService: SocialAuthService) {
    }
 
 
  openDialog() {
    const dialogRef = this.dialog.open(CommunicationAllowPermissionComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  themeToggle = false;

  user:any;
  loggedIn:any;
 
  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      console.log(user)
    });

   


}
}
