import { Component, HostListener, Input, OnInit, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ViewChild, ElementRef } from '@angular/core';
import { IonContent, PopoverController } from '@ionic/angular';

import { PopoverComponent } from 'src/app/popover/popover.component';
import { BookingService } from 'src/app/E-booking-flow-services/booking.service';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { ProductServicesService } from 'services/product-services/product-services.service';
import { environment } from 'src/environments/environment';
import { UserData } from 'src/app/providers/user-data';

import { Geolocation, GeolocationPlugin } from '@capacitor/geolocation';
import { HttpClient, HttpHeaders } from '@angular/common/http';
declare var google:any
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {

  lat: any = '';  
  lng: any = '';  
  location: any = {}
  keys: string[] = [];
  bikeHubID: any =3502;
  slides: any = [];
  slider: any = []
  bikeHub:any
  azimageUrl:any='https://everdevuat.blob.core.windows.net/hubs/';
  profileUrl:any='https://everdevuat.blob.core.windows.net/profilepic/';
  username='';
  logindata!:any;
  private breakpointObserver = inject(BreakpointObserver);
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  marker: any;
  constructor(public popoverController: PopoverController, private _bh: BookingService, private route: ActivatedRoute, private router:Router,
    private _pd: ProductServicesService,private userdata:UserData
  ) {
 
        this.userdata.getuser().then(res=>{
          this.logindata=res;
            this.username=res.FirstName +' ' +res.LastName;
        })
    
  }

  ngOnInit() {
    this.router.navigate(['sign-in'])
   this.printCurrentPosition();
 
    // this.getbatteryhubs()
   this.getbikehubs()
    // this.slides=[
    //   // {image:'./assets/hub.png',content:'Megha hills EV hub',icon:'',time:'8 min by walk',link:'/hub-details'},
    //   // {image:'./assets/hub1.png',content:'Madhapur check post EV hub',icon:'',time:'14 min by walk'},
    //   // {image:'./assets/hub2.png',content:'Kavuri hills EV hub',icon:'',time:'11 min by walk'},
    //   // {image:'./assets/hub3.png',content:'Hi-tech hills EV hub',icon:'',time:'8 min by walk'},
    // ]
    // this.slider=[
    //   {image:'./assets/battery.png',content:'Ameerpet metro EV battery station'},
    //   {image:'./assets/battery1.png',content:'Tolichowki EV battery station'},
    //   {image:'./assets/battery2.png',content:'Kondapur EV battery station'},
    //   {image:'./assets/battery3.png',content:'Kavuri hills EV battery station'},
    // ]
  }
  @ViewChild(IonContent) content!: IonContent;
data=[];
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

  public sidebar: boolean = true;
  getbikehubs() {
    this._bh.getbikehubs(this.bikeHubID).subscribe((res:any) => {
      console.log('tests',res)
      this.bikeHub = res.slice(0,4);
    
    })
  }
//   getbatteryhubs() {
// this._bh.getDate(this.data).subscribe((res:any) => {
//   console.log('tests',res)
//   this.data = res;

// })
//   }
printCurrentPosition() {
  var coordinates = Geolocation.getCurrentPosition().then((resp) => { 
  this.lat = resp.coords.latitude;  
    this.lng = resp.coords.longitude;  
  })
  console.log('Current position:', coordinates);
  
};


}