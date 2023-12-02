import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { ProductServicesService } from 'services/product-services/product-services.service';

@Component({
  selector: 'app-bikelist',
  templateUrl: './bikelist.component.html',
  styleUrls: ['./bikelist.component.scss'],
})
export class BikelistComponent  implements OnInit {
  ProductList:any;

  constructor(private _gt:ProductServicesService) { }

  ngOnInit() {
    this.getList();
  }
  @ViewChild(IonContent) content!: IonContent;

  scrollToBottom() {
  
    this.content.scrollToBottom(500);
  }

  scrollToTop() {

    this.content.scrollToTop(500);
  }

  getList(){
    this._gt.productList().subscribe((res)=>{
      console.log(res)
      this.ProductList=res;
    })
  }
}
