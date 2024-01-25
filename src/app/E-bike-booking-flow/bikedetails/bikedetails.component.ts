import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProductServicesService } from 'services/product-services/product-services.service';
import { UserData } from 'src/app/providers/user-data';
import { BookingService } from 'src/app/E-booking-flow-services/booking.service';
import { environment } from 'src/environments/environment.prod';
import { LoadingService } from 'src/app/services/loading.service';
import { GoogleMap } from '@capacitor/google-maps';
import { OrderService } from 'src/app/services/Order.service';
import { MatSnackBar } from '@angular/material/snack-bar';
interface Food {
  value: string;
  viewValue: number;
  lable:string;
}
@Component({
  selector: 'app-bikedetails',
  templateUrl: './bikedetails.component.html',
  styleUrls: ['./bikedetails.component.scss'],
})
export class BikedetailsComponent  implements OnInit {
   productID:any;
   bikeHubID:any;
   bikeHub:any;
   @ViewChild(IonContent) content!: IonContent;
   azimageUrl:any=environment.azimageUrl_hub;
   imageUrl:any;
   washtype:any=0;
   bookingNo!: string;
   securitydeposit: number=0;
  constructor(private route: ActivatedRoute,private loader:LoadingService,
    private _pd:ProductServicesService,private router:Router,private user:UserData,private _bh:BookingService, private snackBar: MatSnackBar,
 private _od: OrderService,
   
    private booking: BookingService) {
    this.productID = route.snapshot.params["ID"];
   console.log("this is productID value = "+ this.productID);
}

ProductDetails:any;
  ngOnInit() {
    this.getDetails();
 this.getDetail()

  }
  
  gotobooking(){
    this.user.setpId(this.productID)
    this.router.navigateByUrl('/slotbooking')
  }

  getDetails(){
    this.loader.simpleLoader('Loading...')
    this._pd.productDetails(this.productID).subscribe(
      (res)=>{
      this.ProductDetails=res;
      console.log(res)

      this.imageUrl=this.azimageUrl+this.ProductDetails.ImageName;
      this.loader.dismissLoader();
      this.createMap()
    },(error)=>{
      this.loader.dismissLoader();
    }
    )
  }

  scrollToBottom() {
  
    this.content.scrollToBottom(800);
  }

  scrollToTop() {
    
    this.content.scrollToTop(800);
  }

  getDetail() {
    this._od.getordersummeryByBookingNo(this.bookingNo).subscribe((res) => {
      console.log(res)
      this.ProductDetails = res;
    })
  }

  data={
    "BookingNo":null
  }
  foods1: Food[] = [
    { value: 'Foam wash premium', viewValue: 0,lable:'Free' },
    { value: 'Water Wash ', viewValue: 49 ,lable: '₹49'},

  ];
  boxselection(data:any,i:number){
    console.log('selected Amount',data )
    this.washfee.forEach(e => {e.cssstyle ='',e.astyle=''});
    this.washfee[i].cssstyle='box_border';
    this.washfee[i].astyle='seletiondiv';
    this.securitydeposit=this.washfee[i].amount;
    console.log(this.washtype)
    console.log(this.securitydeposit)
  }
  washfee=[
    {
    'amount':0,
    'description':'You will pay the entire amount in case of any damage',
    'feetype':'1,500 + iD Proofs',
    'cssstyle':'',
    'astyle':'',
   },
    {
    'amount':49,
    'description':'You will pay ₹15,000 in case of any damage',
    'feetype':'Basic',
    'cssstyle':'',
    'astyle':'',
  
  
   },
    {
    'amount':69,
    'description':'You will pay ₹5,000 in case of any damage',
    'feetype':'Premium',
    'cssstyle':'',
    'astyle':'',
  
  
   }
  ]

 apiKey = 'AIzaSyCU4W4iQLV5ydrW3UxZncI_JdLi1EsKH5A';

 @ViewChild('map')
  mapRef!: ElementRef<HTMLElement>;
  newMap!: GoogleMap;

  async createMap() {
    this.newMap = await GoogleMap.create({
      id: 'my-cool-map',
      element: this.mapRef.nativeElement,
      apiKey: this.apiKey,
      config: {
        center: {
          
          lat:  17.448294,
          lng: 78.391487,
        },
        zoom: 8,
      },
    });
  }
}
