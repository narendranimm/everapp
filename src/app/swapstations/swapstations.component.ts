import { Component, ElementRef, HostListener, OnInit, ViewChild, inject } from '@angular/core';
import { IonContent, NavController, PopoverController } from '@ionic/angular';
import { Observable, Subscription, interval, map, shareReplay } from 'rxjs';
import { UserData } from '../providers/user-data';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { environment } from 'src/environments/environment.prod';
import { Geolocation, GeolocationPlugin } from '@capacitor/geolocation';
import { BookingService } from '../E-booking-flow-services/booking.service';
import { LoadingService } from '../services/loading.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HubsService } from '../services/Hubs.service';
import { ProductServicesService } from 'services/product-services/product-services.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-swapstations',
  templateUrl: './swapstations.component.html',
  styleUrls: ['./swapstations.component.scss'],
})
export class SwapstationsComponent  implements OnInit {
  loading: boolean = false;
  lat: any = null;
  lng: any = null;
  location: any = {}
  keys: string[] = [];
  bikeHubID: any = 3503;
  slides: any = [];
  slider: any = []
  bikeHub: any;
  events: any;
  loc:any;

  itemsCopy:any;
  searchTerm:any;
  azimageUrl: any = environment.azimageUrl_hub;
  profileUrl: any = environment.azimageUrl_pic;
  username = '';
  logindata!: any;
  show: boolean = true; 
  useraddress:any;
 
  private breakpointObserver = inject(BreakpointObserver);
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(map(result => result.matches), shareReplay());
  marker: any;
  hubsnearby: any = [];
  constructor(private loadingservice: LoadingService, private hub_s: HubsService,
    public popoverController: PopoverController, private _bh: BookingService, private route: ActivatedRoute, private router: Router,
    private _pd: ProductServicesService, private userdata: UserData,private http:HttpClient
  ) {
    this.userdata.getuser().then(res => {
      if (res !== null) {

        this.logindata = res;
        this.username = res.FirstName + ' ' + res.LastName;
      }
    })

  }

  ngOnInit() {
    this.getbranchesByBID()
    this.printCurrentPosition();
    this.address();

    this.getNearByHubs();
    
  }
  @ViewChild(IonContent) content!: IonContent;
  data = [];


  public sidebar: boolean = true;
  getbranchesByBID() {
    this.loadingservice.simpleLoader('loading')
    this._bh.getbranchesByBID(this.bikeHubID, null).subscribe(
      (res: any) => {
        console.log('tests', res)
        this.bikeHub = res.slice(0, 4);

        this.loadingservice.dismissLoader();

      }, (error: any) => {
        this.loadingservice.dismissLoader();

      }
    )
  }
  getNearByHubs() {
    this.postadd_Data.TargetLatitude = this.lat;
    this.postadd_Data.TargetLongitude = this.lng;
    this.postadd_Data.branchtype=3503;
    this.hub_s.getnearByHubsBasedonLatandLongID(this.postadd_Data).subscribe(res => {
      console.log(res)
      this.hubsnearby = res;
      this.loadingservice.dismissLoader();

    },
      (error) => {
        this.loadingservice.dismissLoader();
      }
    )
  }
  printCurrentPosition() {
    var coordinates = Geolocation.getCurrentPosition().then((resp) => {
      this.lat = resp.coords.latitude;
      this.lng = resp.coords.longitude;
      this.http.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.lat},${this.lng}&key=AIzaSyCU4W4iQLV5ydrW3UxZncI_JdLi1EsKH5A`).subscribe((res:any)=>{
        this.loc=res['plus_code']  
        console.log(res.results[0].formatted_address)
        console.log(res.results[8].formatted_address)
        this.useraddress=res.results[0].formatted_address
        this.userdata.setNew('userlocation',this.useraddress)
        console.log(res)
        })

      this.getNearByHubs()
    })
console.log(coordinates)
  };

  // address() {
  //   const map = new google.maps.Map(document.getElementById('map') as HTMLInputElement, {
  //     zoom: 8,
  //     center: {
  //       lat: this.lat.toString(),
  //       lng: this.lng.toString()
  //     }
  //   })
  //   const geocoder = new google.maps.Geocoder()
  //   const InfoWindow = new google.maps.InfoWindow()
  //   this.geocodeLatLng(geocoder)


  // }
  // geocodeLatLng(geocoder: any) {
  //   const input = (document.getElementById("latlng") as HTMLInputElement)
  //   if(input.value){

  //     const latlngstr = input.value.split('', 2);
  //     const latlng = {
  //       lat: parseFloat(latlngstr[0]),
  //       lng: parseFloat(latlngstr[1]),
  //     };
  //     geocoder.geocode({ location: latlng })
  //       .then((res: any) => {
  //         console.log(res)
  //       })
  //   }
  // }
address(){
 
  this.http.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=17.519523,78.381172&key=AIzaSyCU4W4iQLV5ydrW3UxZncI_JdLi1EsKH5A`).subscribe((res:any)=>{
  this.loc=res['plus_code']  
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
  search(data:any){
    this.postadd_Data.TargetLatitude = null;
    this.postadd_Data.TargetLongitude = null;
    this.postadd_Data.branchtype=3502;
    this.hub_s.getnearByHubsBasedonLatandLongID(this.postadd_Data).subscribe(res => {
      console.log(res)
      this.hubsnearby = res;
      this.loadingservice.dismissLoader();

    },
      (error) => {
        this.loadingservice.dismissLoader();
      }
    )
  }
  gotohubdetails(id:number){
    this.userdata.setNew("hubid",id)
    
        this.router.navigateByUrl('/battery-station')
      }
  postadd_Data = {
    "TargetLatitude": null,
    "TargetLongitude": null,
    "branchtype":0,
    "RadiusInKm": 50
  }


}

