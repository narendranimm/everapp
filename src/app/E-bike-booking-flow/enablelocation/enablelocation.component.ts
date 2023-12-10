import { Component, HostListener, OnInit, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {  ViewChild, ElementRef } from '@angular/core';
import { SocialAuthService } from '@abacritt/angularx-social-login';
import { IonContent, NavController } from '@ionic/angular';
import { Geolocation, GeolocationPlugin } from '@capacitor/geolocation';
import { LocationService } from 'src/app/location.service';

@Component({
  selector: 'app-enablelocation',
  templateUrl: './enablelocation.component.html',
  styleUrls: ['./enablelocation.component.scss'],
})
export class EnablelocationComponent  implements OnInit {
  slides:any=[]
  lati: any = '';  
  longi: any = '';  
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
      this.printCurrentPosition();
      this.slides=[
        {image:'./assets/battery.png',content:'Ameerpet metro EV battery station'},
        {image:'./assets/battery1.png',content:'Tolichowki EV battery station'},
        {image:'./assets/battery2.png',content:'Kondapur EV battery station'},
        {image:'./assets/battery3.png',content:'Kavuri hills EV battery station'},
      ]
    }
  constructor(private element: ElementRef,private authService: SocialAuthService,public navCtrl: NavController,private location:LocationService,private geolocation: Geolocation ) {}

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

 printCurrentPosition() {
    var coordinates = Geolocation.getCurrentPosition().then((resp) => { 
    this.lati = resp.coords.latitude;  
      this.longi = resp.coords.longitude;  
    })
    console.log('Current position:', coordinates);
  };
  initMap(): void {
    const map = new google.maps.Map(
      document.getElementById("map") as HTMLElement,
      {
        zoom: 8,
        center: { lat: this.lati, lng: this.longi },
      }
    );
    const geocoder = new google.maps.Geocoder();
    const infowindow = new google.maps.InfoWindow();
  
    (document.getElementById("submit") as HTMLElement).addEventListener(
      "click",
      () => {
        this.geocodeLatLng(geocoder, map, infowindow);
      }
    );
  }
  
   geocodeLatLng(
    geocoder: google.maps.Geocoder,
    map: google.maps.Map,
    infowindow: google.maps.InfoWindow
  ) {
    const input = (document.getElementById("latlng") as HTMLInputElement).value;
    const latlngStr = input.split(",", 2);
    const latlng = {
      lat: parseFloat(latlngStr[0]),
      lng: parseFloat(latlngStr[1]),
    };
  
    geocoder
      .geocode({ location: latlng })
      .then((response) => {
        if (response.results[0]) {
          map.setZoom(11);
  
          const marker = new google.maps.Marker({
            position: latlng,
            map: map,
          });
  
          infowindow.setContent(response.results[0].formatted_address);
          infowindow.open(map, marker);
        } else {
          window.alert("No results found");
        }
      })
      .catch((e) => window.alert("Geocoder failed due to: " + e));
  }
  
  

}
