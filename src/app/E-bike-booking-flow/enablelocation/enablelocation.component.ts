import { Component, HostListener, OnInit, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {  ViewChild, ElementRef } from '@angular/core';
import { SocialAuthService } from '@abacritt/angularx-social-login';
import { IonContent, NavController } from '@ionic/angular';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-enablelocation',
  templateUrl: './enablelocation.component.html',
  styleUrls: ['./enablelocation.component.scss'],
})
export class EnablelocationComponent  implements OnInit {
  slides:any=[]
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

 printCurrentPosition = async () => {
    const coordinates = await Geolocation.getCurrentPosition();
  
    console.log('Current position:', coordinates);
  };
}
