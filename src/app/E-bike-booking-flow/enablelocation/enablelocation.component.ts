import { Component, HostListener, OnInit, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {  ViewChild, ElementRef } from '@angular/core';
// import { SocialAuthService } from '@abacritt/angularx-social-login';
import { IonContent, NavController } from '@ionic/angular';
import { Geolocation, GeolocationPlugin } from '@capacitor/geolocation';
import { LocationService } from 'src/app/location.service';
import { BookingService } from 'src/app/E-booking-flow-services/booking.service';
import { UserData } from 'src/app/providers/user-data';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-enablelocation',
  templateUrl: './enablelocation.component.html',
  styleUrls: ['./enablelocation.component.scss'],
})
export class EnablelocationComponent  implements OnInit {
  slides:any=[]
  lati: any = '';  
  useraddress:any=null;
  longi: any = '';  
  bikeHub:any;
user:any;
bikeHubID:any;
username = '';
logindata!: any;
loggedIn:any;
loc:any
azimageUrl:any='https://everdevuat.blob.core.windows.net/hubs/';
profileUrl:any='https://everdevuat.blob.core.windows.net/profilepic/';
  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
    constructor(private _bh:BookingService,private element: ElementRef,private userdata: UserData,private http:HttpClient,
      // private authService: SocialAuthService, 
      public navCtrl: NavController,private location:LocationService,private geolocation: Geolocation ) {
      this.getbranchesByBID();
      this.userdata.getuser().then(res => {
        if (res !== null) {
  
          this.logindata = res;
          this.username = res.FirstName + ' ' + res.LastName;
        }
      })
      this.userdata.getId('userlocation').then(res => {
        if (res !== null) {
  
          this.useraddress = res;
          console.log(this.useraddress)
        }
      })
  
    }
    ngOnInit() {
      this.printCurrentPosition();
      // this.slides=[];
      this.address()
    }

  @HostListener("wheel", ["$event"])
  public onScroll(event: WheelEvent) {
    this.element.nativeElement.scrollLeft += event.deltaY;
  }


  @ViewChild(IonContent) content!: IonContent;

  scrollToBottom() {
    
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
  address(){
    var coordinates = Geolocation.getCurrentPosition().then((resp) => { 
      this.lati = resp.coords.latitude;  
        this.longi = resp.coords.longitude;  
        this.http.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.lati},${this.longi}&key=AIzaSyCU4W4iQLV5ydrW3UxZncI_JdLi1EsKH5A`).subscribe((res:any)=>{
          this.loc=res['plus_code']  
          console.log(res.results[0].formatted_address)
          console.log(res.results[8].formatted_address)
          this.useraddress=res.results[8].formatted_address
          this.userdata.setNew('userlocation',this.useraddress)
          console.log(res)
          })
      })
      console.log('Current position:', coordinates);
  
  }
  

  
  getbranchesByBID() {
    this._bh.getbranchesByBID(this.bikeHubID,null).subscribe((res:any) => {
      console.log('tests',res)
      this.bikeHub = res.slice(0,4);
    
    })
  }
  show: boolean = true;  
}
