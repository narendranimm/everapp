import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent, ModalController } from '@ionic/angular';
import { OrderService } from '../services/Order.service';
import { ModalcontentComponent } from '../modalcontent/modalcontent.component';

@Component({
  selector: 'app-offer-coupon',
  templateUrl: './offer-coupon.component.html',
  styleUrls: ['./offer-coupon.component.scss'],
})
export class OfferCouponComponent  implements OnInit {
  offers: any;

  constructor(private os:OrderService,private modalController: ModalController) { }

  ngOnInit() {
    this.getall();
  }
  getall(){
    this.os.getAlloffers().subscribe(res=>{
      this.offers=res;
    })
  }
  @ViewChild(IonContent) content!: IonContent;
  open(id:number){
    this.presentModal();
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
  
  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalcontentComponent,
    });

    await modal.present();
  }
}
