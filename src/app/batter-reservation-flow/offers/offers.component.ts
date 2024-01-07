import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalcontentComponent } from 'src/app/modalcontent/modalcontent.component';
import { OrderService } from 'src/app/services/Order.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss'],
})
export class OffersComponent  implements OnInit {
  offers: any;

  constructor(private os:OrderService,private modalController:ModalController) { }

  ngOnInit() {this.getAll()}
  getAll(){
    this.os.getAlloffers().subscribe(res=>{
      console.log(res)
      this.offers=res;
    })

  }
  applyCoupon(id:number){
    this.presentModal()
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalcontentComponent, // Your modal component
      cssClass: 'custom-modal-class', // Optional: Add a custom CSS class for styling
    });

    await modal.present();
  }
}
