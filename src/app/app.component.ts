import { Component, ViewChild ,Inject, OnInit} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ActionSheetController, IonModal } from '@ionic/angular';
import { CommunicationAllowPermissionComponent } from './communication-allow-permission/communication-allow-permission.component';
// import { SocialAuthService } from '@abacritt/angularx-social-login';
import { register } from 'swiper/element/bundle';
import { UserData } from './providers/user-data';
import { ModeService } from './mode.service';
import { Router } from '@angular/router';


register();
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  value: any;
    maxDate!: Date;
  date!: Date;
  presentingElement:any;
 
  userid: any;

  constructor(private router:Router,
    public dialog: MatDialog,private localdata:UserData,
    private actionSheetCtrl: ActionSheetController,
    colorMode:ModeService) {
     
      colorMode.darkMode$.subscribe((darkMode) => {
        if (darkMode) {
          document.body.classList.add('dark-theme');
        } else {
          document.body.classList.remove('dark-theme');
        }
      })
    }
 
    canDismiss = async () => {
      const actionSheet = await this.actionSheetCtrl.create({
        header: 'Are you sure?',
        buttons: [
          {
            text: 'Yes',
            role: 'confirm',
          },
          {
            text: 'No',
            role: 'cancel',
          },
        ],
      });
  
      actionSheet.present();
  
      const { role } = await actionSheet.onWillDismiss();
  
      return role === 'confirm';
    };
  openDialog() {
    const dialogRef = this.dialog.open(CommunicationAllowPermissionComponent,{
      width:'280px',
      height:'290px',
    
    }
      
      );

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  themeToggle = false;

  user:any;
  loggedIn:any;
 
  ngOnInit() {
    // this.authService.authState.subscribe((user) => {
    //   this.user = user;
    //   this.loggedIn = (user != null);
    //   console.log(user)
    // });
    this.maxDate = new Date();
    this.maxDate.setMonth(this.maxDate.getMonth() - 12 * 18);
    this.presentingElement = document.querySelector('.ion-page'); 


}


}
