import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProductServicesService } from 'services/product-services/product-services.service';
import { UserData } from 'src/app/providers/user-data';
@Component({
  selector: 'app-bikedetails',
  templateUrl: './bikedetails.component.html',
  styleUrls: ['./bikedetails.component.scss'],
})
export class BikedetailsComponent  implements OnInit {
   taskId:any;
   @ViewChild(IonContent) content!: IonContent;

  constructor(private route: ActivatedRoute,private _pd:ProductServicesService,private router:Router,private user:UserData) {
    this.taskId = route.snapshot.params["ID"];
    console.log("this is taskId value = "+ this.taskId);
}

ProductDetails:any;
  ngOnInit() {
    this.getDetails();
  }
  
  gotobooking(){
    this.user.setpId(this.ProductDetails.ProductID)
    this.router.navigateByUrl('/duration/'+this.ProductDetails.ProductID)
  }

  getDetails(){
    this._pd.productDetails(this.taskId).subscribe((res)=>{
      console.log(res)
      this.ProductDetails=res;
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

 
}
