import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonContent } from '@ionic/angular';
import { ProductServicesService } from 'services/product-services/product-services.service';
import { LoadingService } from 'src/app/services/loading.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-bikelist',
  templateUrl: './bikelist.component.html',
  styleUrls: ['./bikelist.component.scss'],
})
export class BikelistComponent implements OnInit {
  ProductList: any = [];
  branchid: any;
  productname:any=null;
  azimageUrl: any = environment.azimageUrl_hub;
  searchValue:any;
  constructor(private route: ActivatedRoute, private _pd: ProductServicesService, private router: Router,
    private loader: LoadingService) {

    this.branchid = route.snapshot.params["ID"];
    console.log("this is branchid value = " + this.branchid);

  }

  ngOnInit() {
    this.getList();
  }

  getList() {
    this.loader.simpleLoader('Loading...')
    this._pd.productListBybranchId(this.branchid,this.productname).subscribe(
      (res) => {
        this.ProductList = res;
        this.loader.dismissLoader();
      }, (error) => {
        this.loader.dismissLoader();

      }
    )
  }
  getListsearch() {
    this._pd.productListBybranchId(this.branchid,this.productname).subscribe(
      (res) => {
        this.ProductList = res;
      }, (error) => {

      }
    )
  }
  search(data:any){
    console.log(this.searchValue)
    this.productname=this.searchValue;
     this.getListsearch();
  }
  gotoDetails(ID: any) {
    this.router.navigateByUrl('/bikedetails/'+ID)
  }

}
