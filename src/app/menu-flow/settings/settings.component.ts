import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, HostBinding, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent  implements OnInit {
 

  constructor(private overlay:OverlayContainer) { }

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
 toggleControl = new FormControl(false);
  @HostBinding('class')  className = '';
 darkClassName = 'theme-dark';
 lightClassName = 'theme-light';
}


