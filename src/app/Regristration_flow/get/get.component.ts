import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AllowPermissionsComponent } from '../allow-permissions/allow-permissions.component';
import { SplashServiceService } from 'src/app/splash-service.service';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.scss'],
})
export class GetComponent  implements OnInit {

  constructor(public dialog: MatDialog,private splashScreenStateService:SplashServiceService) {}

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

}
