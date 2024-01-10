import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, HostBinding, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { UserData } from 'src/app/providers/user-data';
import { SnackbarService } from 'src/app/snackbar.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent  implements OnInit {
  logindata:any;

  constructor(private overlay:OverlayContainer,private storage:UserData,
private snackbarService: SnackbarService,private router:Router,private userdata:UserData
) { 

  
  this.userdata.getuser().then(res => {
    if (res !== null) {
      this.logindata = res;
      console.log(res)

    } else {
    }

  })
}

  ngOnInit() {
    this.toggleControl.valueChanges.subscribe(
      (darkMode:any)=>{
        this.className= darkMode ? this.darkClassName : this.lightClassName;
        if(darkMode){
          this.overlay.getContainerElement().classList.add(this.darkClassName);
  
        }else{
          this.overlay.getContainerElement().classList.remove(this.darkClassName);
        }
  
      }
    )
  }
  logout(){
this.storage.clear();
//put snap bar and redirect to login page.
this.snackbarService.presentSnackbar('Logout Done Successfully !!!',1000,'bottom','success')
this.router.navigateByUrl('/register')
  }
security(){
  if(  this.logindata.SecurityPin){
    this.snackbarService.presentSnackbar("Security PIN Setup Already Done",1000,'bottom','success')

  }else{

    this.router.navigateByUrl("/security")
  }
}

  ///csss
 toggleControl = new FormControl(false);
  @HostBinding('class')  className = '';
 darkClassName = 'theme-dark';
 lightClassName = 'theme-light';
}


