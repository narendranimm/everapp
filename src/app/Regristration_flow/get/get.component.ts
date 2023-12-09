import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AllowPermissionsComponent } from '../allow-permissions/allow-permissions.component';
import { SplashServiceService } from 'src/app/splash-service.service';
import { Plugins } from '@capacitor/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { StorageService } from 'src/app/services/storage.service';

// export const INTRO_KEY ='intro-slides';
@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.scss'],
})
export class GetComponent  implements OnInit {

  constructor(private storage:StorageService, public dialog: MatDialog,private splashScreenStateService:SplashServiceService,private router:Router,public _storage: Storage) {}

  openDialog() {
    const dialogRef = this.dialog.open(AllowPermissionsComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

// async gotoLogin(){
//    await  this.storage.setStorage(INTRO_KEY,true)
//    this.router.navigateByUrl('/login', {replaceUrl:true})
// }
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
  
}
