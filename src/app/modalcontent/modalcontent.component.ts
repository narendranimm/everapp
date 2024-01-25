import { Component, Inject, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { OrderService } from '../services/Order.service';
import { ActivatedRoute } from '@angular/router';
import { UserData } from '../providers/user-data';
import { ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-modalcontent',
  templateUrl: './modalcontent.component.html',
  styleUrls: ['./modalcontent.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModalcontentComponent  implements OnInit {
  filteredItems:any;
  offerID:any;
  
  constructor(private modal:ModalController,private os:OrderService,private route:ActivatedRoute,private user:UserData ,@Inject(MAT_DIALOG_DATA) public data: any) {
   console.log(data)
    
  }

  closeModal() {
    // Call the dismiss method to close the modal
    // You can also handle any cleanup or additional logic here
    console.log('Modal closed');
    this.modal.dismiss();
  }
  ngOnInit(): void {

  }


}
