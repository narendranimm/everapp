import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modalcontent',
  templateUrl: './modalcontent.component.html',
  styleUrls: ['./modalcontent.component.scss'],
})
export class ModalcontentComponent  implements OnInit {
  constructor(private modal:ModalController) {}

  closeModal() {
    // Call the dismiss method to close the modal
    // You can also handle any cleanup or additional logic here
    console.log('Modal closed');
    this.modal.dismiss();
  }
  ngOnInit(): void {
    
  }

}
