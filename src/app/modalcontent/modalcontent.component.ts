import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { OrderService } from '../services/Order.service';
import { ActivatedRoute } from '@angular/router';
import { UserData } from '../providers/user-data';

@Component({
  selector: 'app-modalcontent',
  templateUrl: './modalcontent.component.html',
  styleUrls: ['./modalcontent.component.scss'],
})
export class ModalcontentComponent  implements OnInit {
  filteredItems:any;
  offerID:any;
  constructor(private modal:ModalController,private os:OrderService,private route:ActivatedRoute,private user:UserData) {
    this.offerID = route.snapshot.params["ID"];
    console.log("this is productID value = "+ this.offerID);
    this.user.setpId(this.offerID)
  }

  closeModal() {
    // Call the dismiss method to close the modal
    // You can also handle any cleanup or additional logic here
    console.log('Modal closed');
    this.modal.dismiss();
  }
  ngOnInit(): void {
    this.getall()
  }
  getall(){
    this.os.getAlloffersById(this.offerID).subscribe(res=>{
      this.filteredItems=res;
      this.offerID=res;
      console.log(res)
    })
  }

}
