import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonContent } from '@ionic/angular';
import { ProductServicesService } from 'services/product-services/product-services.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-bikelist',
  templateUrl: './bikelist.component.html',
  styleUrls: ['./bikelist.component.scss'],
})
export class BikelistComponent  implements OnInit {
  ProductList:any=[];
  taskId:any;
  azimageUrl:any=environment.azimageUrl_hub;

  constructor(private route: ActivatedRoute,private _pd:ProductServicesService) { 

      this.taskId = route.snapshot.params["ID"];
      console.log("this is taskId value = "+ this.taskId);

  }

  ngOnInit() {
    this.getList();
  }

  getList(){
    this._pd.productListBybranchId(this.taskId).subscribe((res)=>{
      console.log(res)
      this.ProductList=res;
    })
  }
}
