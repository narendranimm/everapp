import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, HostBinding, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { UserData } from 'src/app/providers/user-data';
import { RegisterService } from 'src/app/registration-services/register.service';
import { LoadingService } from 'src/app/services/loading.service';
import { SnackbarService } from 'src/app/snackbar.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent  implements OnInit {
  logindata:any;

  constructor(private overlay:OverlayContainer,private storage:UserData,private _rs:RegisterService,
private snackbarService: SnackbarService,private router:Router,private userdata:UserData,
private loading:LoadingService
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
remove(){
  this.loading.simpleLoader('Loading....')
  this.logindata.ISActive=false;
  this._rs.removeUser(this.logindata.UserID,false).subscribe((res:any)=>{
    console.log(res)
    this.loading.dismissLoader();
    if(res.status == 'true'){
      this.router.navigateByUrl('/register')

    }

  },(error)=>{
    this.loading.dismissLoader();
  }
  )

  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

  // Initialize the dark theme based on the initial
  // value of the prefers-color-scheme media query
  this.initializeDarkTheme(prefersDark.matches);

  // Listen for changes to the prefers-color-scheme media query
  prefersDark.addEventListener('change', (mediaQuery) => this.initializeDarkTheme(mediaQuery.matches));
}

// Check/uncheck the toggle and update the theme based on isDark
initializeDarkTheme(isDark:any) {
  this.themeToggle = isDark;
  this.toggleDarkTheme(isDark);
}

// Listen for the toggle check/uncheck to toggle the dark theme
toggleChange(ev:any) {
  this.toggleDarkTheme(ev.detail.checked);
}

// Add or remove the "dark" class on the document body
toggleDarkTheme(shouldAdd:any) {
  document.body.classList.toggle('dark', shouldAdd);


}
  ///csss
 toggleControl = new FormControl(false);
  @HostBinding('class')  className = '';
 darkClassName = 'theme-dark';
 lightClassName = 'theme-light';


 themeToggle = false;


}


