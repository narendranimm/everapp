import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, HostBinding, OnInit, inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, map, shareReplay } from 'rxjs';
import { LoadingService } from '../services/loading.service';
import { UserData } from '../providers/user-data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent  implements OnInit {
  userid:any=null
 
  private breakpointObserver = inject(BreakpointObserver);
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
    constructor(private overlay:OverlayContainer,private localdata:UserData,private router:Router) {
      this.localdata.getuser().then((res:any) => {debugger
        if (res !== null) {
          this.userid = res.UserID;
          if(this.userid){
           this.router.navigate(['/enableloaction']);
           return
          }
          else{
            this.router.navigate(['/'])
  
          }
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
   toggleControl = new FormControl(false);
    @HostBinding('class')  className = '';
   darkClassName = 'theme-dark';
   lightClassName = 'theme-light';
  }


