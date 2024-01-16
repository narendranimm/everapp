import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent, ModalController } from '@ionic/angular';
import { OrderService } from '../services/Order.service';
import { ModalcontentComponent } from '../modalcontent/modalcontent.component';
import { LoadingService } from '../services/loading.service';
import { ActivatedRoute } from '@angular/router';
import { UserData } from '../providers/user-data';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-offer-coupon',
  templateUrl: './offer-coupon.component.html',
  styleUrls: ['./offer-coupon.component.scss'],
})
export class OfferCouponComponent  implements OnInit {
  offers: any;
  isAlertOpen = false;
  alertButtons = ['Action'];
  filteredItems: any;
  ProductDetails: any;
  bookingNo!: string;

  constructor(public dialog: MatDialog, private os:OrderService,private modalController: ModalController,private _pd: OrderService,private route:ActivatedRoute,private userdata: UserData,
    private load:LoadingService) {
      this.userdata.getId('bookingNo').then(data => {
        if (data !== null) {
          this.bookingNo = data;
          this.getDetails()
        }
      })
     }

  ngOnInit() {
    this.getall();
    this.getDetails() 
  }
  getall(){
    this.os.getAlloffers().subscribe(res=>{
      this.filteredItems=res;
      this.offers=res;
      console.log(res)
    })
  }
  @ViewChild(IonContent) content!: IonContent;
  open(id:number){
    // this.presentModal()
  }
  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }
  scrollToBottom() {
    // Passing a duration to the method makes it so the scroll slowly
    // goes to the bottom instead of instantly
    this.content.scrollToBottom(500);
  }
  filterItems(searchTerm: any, key: string) {
    // this.load.presentLoading('Loading..')
    
    this.filteredItems = this.offers.filter((item:any) =>
      item[key].toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
  scrollToTop() {
    // Passing a duration to the method makes it so the scroll slowly
    // goes to the top instead of instantly
    this.content.scrollToTop(500);
  }
  
  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalcontentComponent,
    
    });

    await modal.present();
  }
  opendialog(){
    this.dialog.open(ModalcontentComponent, {
      width: '320px',
      height: '300px'
    });
    setTimeout(() => {
      this.dialog.closeAll()
   }, 3000)
  }
  getDetails() {
    this._pd.getordersummeryByBookingNo(this.bookingNo).subscribe((res) => {
      console.log(res)
      this.ProductDetails = res;
    })
  }
}
