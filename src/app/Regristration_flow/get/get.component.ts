import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AllowPermissionsComponent } from '../allow-permissions/allow-permissions.component';
import { SplashServiceService } from 'src/app/splash-service.service';
import { Plugins } from '@capacitor/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import {AndroidPermissions} from '@awesome-cordova-plugins/android-permissions/ngx'
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserData } from 'src/app/providers/user-data';
// export const INTRO_KEY ='intro-slides';
@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.scss'],
})
export class GetComponent  implements OnInit {
  userid: any=null;

  constructor(private userdata:UserData,private snackBar: MatSnackBar,
     public dialog: MatDialog,private splashScreenStateService:SplashServiceService,private router:Router,public _storage: Storage,private androidPermissions: AndroidPermissions) 
  {
    this.userdata.getuser().then(res=>{
      if(res !=null){

        this.userid=res.UserID;
      }else{

        console.log('err')
      }
    })
  }

  openDialog() {
    const dialogRef = this.dialog.open(AllowPermissionsComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


  ngOnInit(): void {
    setTimeout(() => {
       this.splashScreenStateService.stop();
    }, 5000);
   
  }
  log = 1000;
  isModalOpen = false;
 

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
  Permissions(){

      
    this.androidPermissions.checkPermission( this.androidPermissions.PERMISSION.MANAGE_EXTERNAL_STORAGE,).then(
      result => 
      // console.log('Has permission?',result.hasPermission),
      
      {
        
        if(result.hasPermission){
          this.snackBar.open(" Permission already allowed ");
          this.snackBar.open(this.userid);
          if(this.userid != null){
            this.router.navigateByUrl('enableloaction')
          }else{
            this.router.navigateByUrl('register')

          }
        }else{
          this.requestPermission();
        }
        
      },
      err => this.androidPermissions.requestPermission( this.androidPermissions.PERMISSION.MANAGE_EXTERNAL_STORAGE,)
    );
    
  
  }
  requestPermission() {
    this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.CAMERA, 
      this.androidPermissions.PERMISSION.GET_ACCOUNTS,
      this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE,
      this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE,
      this.androidPermissions.PERMISSION.MANAGE_EXTERNAL_STORAGE,
      this.androidPermissions.PERMISSION.READ_MEDIA_IMAGE,
    ]).then(
      result =>{
        if(result.hasPermission){
          localStorage.setItem('permissionRequested', 'true');
              if(this.userid != null){
                this.router.navigateByUrl('/homepage')
              }else{
                this.router.navigateByUrl('/register')
        
              }
            }else{
              
              this.snackBar.open('Permission denied');
              if(this.userid != null){
                this.router.navigateByUrl('/homepage')
              }else{
                this.router.navigateByUrl('/register')
        
              }
            }
          },
          err=>{
            this.snackBar.open('err');
            
          }
    )
  }
}
