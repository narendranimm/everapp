import { Component, HostListener, OnInit, inject } from '@angular/core';

import { IonContent } from '@ionic/angular';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {  ViewChild, ElementRef } from '@angular/core';
import { SocialAuthService } from '@abacritt/angularx-social-login';
import { NavController } from '@ionic/angular';
const CountdownTimeUnits: Array<[string, number]> = [
  ['Y', 1000 * 60 * 60 * 24 * 365], // years
  ['M', 1000 * 60 * 60 * 24 * 30], // months
  ['D', 1000 * 60 * 60 * 24], // days
  ['H', 1000 * 60 * 60], // hours
  ['m', 1000 * 60], // minutes
  ['s', 1000], // seconds
  ['S', 1], // million seconds
];


@Component({
  selector: 'app-homepage-afterbooking',
  templateUrl: './homepage-afterbooking.component.html',
  styleUrls: ['./homepage-afterbooking.component.scss'],
})
export class HomepageAfterbookingComponent  implements OnInit {

  slides:any=[];
  slider:any=[];
  user:any;
  loggedIn:any;
    private breakpointObserver = inject(BreakpointObserver);
  
    isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
      .pipe(
        map(result => result.matches),
        shareReplay()
      );
      ngOnInit() {
        this.authService.authState.subscribe((user) => {
          this.user = user;
          this.loggedIn = (user != null);
          console.log(user)
        });
        this.slides=[
          {image:'./assets/hub.png',content:'Ameerpet metro EV battery station'},
          {image:'./assets/hub1.png',content:'Tolichowki EV battery station'},
          {image:'./assets/hub2.png',content:'Kondapur EV battery station'},
          {image:'./assets/hub3.png',content:'Kavuri hills EV battery station'},
        ]
    
        this.slider=[
          {image:'./assets/battery.png',content:'Ameerpet metro EV battery station'},
          {image:'./assets/battery1.png',content:'Tolichowki EV battery station'},
          {image:'./assets/battery2.png',content:'Kondapur EV battery station'},
          {image:'./assets/battery3.png',content:'Kavuri hills EV battery station'},
        ]
        
      }
    constructor(private element: ElementRef,private authService: SocialAuthService,public navCtrl: NavController) {}
  
    @HostListener("wheel", ["$event"])
    public onScroll(event: WheelEvent) {
      this.element.nativeElement.scrollLeft += event.deltaY;
    }
    

    @ViewChild(IonContent) content!: IonContent;

    scrollToBottom() {
      // Passing a duration to the method makes it so the scroll slowly
      // goes to the bottom instead of instantly
      this.content.scrollToBottom(500);
    }
  
    scrollToTop() {
      // Passing a duration to the method makes it so the scroll slowly
      // goes to the top instead of instantly
      this.content.scrollToTop(500);
    }
    
  
}
