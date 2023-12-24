import { Component, HostListener, Input, OnInit, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, of } from 'rxjs';
import { catchError, map, shareReplay } from 'rxjs/operators';
import { ViewChild, ElementRef } from '@angular/core';
import { IonContent, PopoverController } from '@ionic/angular';
import { Injectable, NgZone } from '@angular/core';
import { filter, scan } from 'rxjs/operators';
import { PopoverComponent } from 'src/app/popover/popover.component';
import { BookingService } from 'src/app/E-booking-flow-services/booking.service';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { ProductServicesService } from 'services/product-services/product-services.service';
import { environment } from 'src/environments/environment.prod';
import { UserData } from 'src/app/providers/user-data';

import { Geolocation, GeolocationPlugin } from '@capacitor/geolocation';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoadingService } from 'src/app/services/loading.service';
import { HubsService } from 'src/app/services/Hubs.service';
export interface MapGeocoderResponse {
  status: google.maps.GeocoderStatus;
  results: google.maps.GeocoderResult[];
}
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  loading: boolean = false;
  lat!: any;
  lng!: any;
  location: any = {}
  keys: string[] = [];
  bikeHubID: any = 3502;
  slides: any = [];
  slider: any = []
  bikeHub: any;
  events: any;
  azimageUrl: any = environment.azimageUrl_hub;
  profileUrl: any = environment.azimageUrl_pic;
  username = '';
  logindata!: any;
  private breakpointObserver = inject(BreakpointObserver);
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(map(result => result.matches),shareReplay());
  marker: any;
  hubsnearby: any=[];
  constructor(private loadingservice: LoadingService,private hub_s:HubsService,
     public popoverController: PopoverController, private _bh: BookingService, private route: ActivatedRoute, private router: Router,
    private _pd: ProductServicesService, private userdata: UserData
  ) {
    this.userdata.getuser().then(res => {
        this.logindata = res;
        this.username = res.FirstName + ' ' + res.LastName;
      })

  }

  ngOnInit() {
    this.getbikehubs()
    this.printCurrentPosition();
   // this.address();
    this.postadd_Data.TargetLatitude=this.lat
    this.postadd_Data.TargetLatitude=this.lng
    this.getNearByHubs()
  }
  @ViewChild(IonContent) content!: IonContent;
  data = [];


  public sidebar: boolean = true;
  getbikehubs() {
    this.loadingservice.simpleLoader('loading')
    this._bh.getbikehubs(this.bikeHubID).subscribe(
      (res: any) => {
      console.log('tests', res)
      this.bikeHub = res.slice(0, 4);

      this.loadingservice.dismissLoader();

    },(error:any)=>{
      this.loadingservice.dismissLoader();

    }
    )
  }
  getNearByHubs() {
    console.log(this.postadd_Data)

    this.hub_s.getnearByHubsBasedonLatandLongID(this.postadd_Data).subscribe(res=>
      {
      console.log(res)
      this.hubsnearby=res;
      this.loadingservice.dismissLoader();

    },
    (error)=>{
      this.loadingservice.dismissLoader();
    }
    )
  }
  printCurrentPosition() {
    var coordinates = Geolocation.getCurrentPosition().then((resp) => {
      this.lat = resp.coords.latitude;
      this.lng = resp.coords.longitude;
    })
    console.log('Current position:', coordinates);

  };

  address() {

    const map = new google.maps.Map(document.getElementById('map') as HTMLInputElement, {
      zoom: 8,
      center: {
        lat: this.lat,
        lng: this.lng
      }
    })
    const geocoder = new google.maps.Geocoder()
    const InfoWindow = new google.maps.InfoWindow()
    this.geocodeLatLng(geocoder)


  }
  geocodeLatLng(geocoder: any) {
    const input = (document.getElementById("latlng") as HTMLInputElement).value;
    const latlngstr = input.split('', 2);
    const latlng = {
      lat: parseFloat(latlngstr[0]),
      lng: parseFloat(latlngstr[1]),
    };
    geocoder.geocode({ location: latlng })
      .then((res: any) => {
        console.log(res)
      })
  }

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

  postadd_Data={
    "TargetLatitude": 17.5160502, 
    "TargetLongitude": 78.3418991,
    "RadiusInKm": 50
  }
}
