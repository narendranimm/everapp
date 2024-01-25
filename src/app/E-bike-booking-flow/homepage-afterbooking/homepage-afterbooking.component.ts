import { Component, HostListener, OnDestroy, OnInit, inject } from '@angular/core';
import { Geolocation, GeolocationPlugin } from '@capacitor/geolocation';
import { IonContent } from '@ionic/angular';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subscription, interval } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {  ViewChild, ElementRef } from '@angular/core';
import { SocialAuthService } from '@abacritt/angularx-social-login';
import { NavController } from '@ionic/angular';
import { environment } from 'src/environments/environment.prod';
import { UserData } from 'src/app/providers/user-data';
import { FormControl } from '@angular/forms';
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
export class HomepageAfterbookingComponent  implements OnInit, OnDestroy {
  lat!: any;  
  lng!:any;  
  azimageUrl:any=environment.azimageUrl_hub;
  profileUrl:any=environment.azimageUrl_pic;
  username='';
  logindata!:any;
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
     
        this.userdata.getuser().then(
          res=>{
          this.logindata=res;
            this.username=res.FirstName +' ' +res.LastName;
        })  
        this.subscription = interval(1000)
        .subscribe((x:any) => { this.getTimeDifference(); });

        this.slides=[
          // {image:'./assets/hub.png',content:'Ameerpet metro EV battery station'},
          // {image:'./assets/hub1.png',content:'Tolichowki EV battery station'},
          // {image:'./assets/hub2.png',content:'Kondapur EV battery station'},
          // {image:'./assets/hub3.png',content:'Kavuri hills EV battery station'},
        ]
    
        this.slider=[
          // {image:'./assets/battery.png',content:'Ameerpet metro EV battery station'},
          // {image:'./assets/battery1.png',content:'Tolichowki EV battery station'},
          // {image:'./assets/battery2.png',content:'Kondapur EV battery station'},
          // {image:'./assets/battery3.png',content:'Kavuri hills EV battery station'},
        ]
        
      }
    constructor(private element: ElementRef,public navCtrl: NavController,private userdata:UserData) {}
  
    @HostListener("wheel", ["$event"])
    public onScroll(event: WheelEvent) {
      this.element.nativeElement.scrollLeft += event.deltaY;
    }
    printCurrentPosition() {
      var coordinates = Geolocation.getCurrentPosition().then((resp:any) => { 
      this.lat = resp.coords.latitude;  
        this.lng = resp.coords.longitude;  
      })
      console.log('Current position:', coordinates);
      
    };
    
    address(){
    
      const map = new google.maps.Map(document.getElementById('map') as HTMLInputElement,{
        zoom:8,
        center:{
          lat:this.lat,
          lng:this.lng
        }
      })
     const geocoder =new google.maps.Geocoder()
     const InfoWindow =new google.maps.InfoWindow()
       this.geocodeLatLng(geocoder)
    
    
     }
     geocodeLatLng(geocoder:any){
        const input = (document.getElementById("latlng") as HTMLInputElement).value;
        const latlngstr=input.split('',2);
        const latlng = {
          lat: parseFloat(latlngstr[0]),
          lng: parseFloat(latlngstr[1]),
        };
        geocoder.geocode({location:latlng})
        .then((res:any)=>{
          console.log(res)
        })
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
    
      show=false;
      private subscription!: Subscription;
      
      public dateNow = new Date();
      public dDay = new Date('Dec 24 2023 00:00:00');
      milliSecondsInASecond = 1000;
      hoursInADay = 24;
      minutesInAnHour = 60;
      SecondsInAMinute  = 60;
      
      public timeDifference:any;
      public secondsToDday:any;
      public minutesToDday:any;
      public hoursToDday:any;
      public daysToDday:any;
      
      
      private getTimeDifference () {
          this.timeDifference = this.dDay.getTime() - new  Date().getTime();
          this.allocateTimeUnits(this.timeDifference);
      }
      
      private allocateTimeUnits (timeDifference:any) {
          this.secondsToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond) % this.SecondsInAMinute);
          this.minutesToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour) % this.SecondsInAMinute);
          this.hoursToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute) % this.hoursInADay);
          this.daysToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute * this.hoursInADay));
      }
      
    
      
      ngOnDestroy() {
        this.subscription.unsubscribe();
      }
  
      disableSelect = new FormControl(false);
}
