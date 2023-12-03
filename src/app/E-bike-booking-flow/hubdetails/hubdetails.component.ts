import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductServicesService } from 'services/product-services/product-services.service';

@Component({
  selector: 'app-hubdetails',
  templateUrl: './hubdetails.component.html',
  styleUrls: ['./hubdetails.component.scss'],
})
export class HubdetailsComponent  implements OnInit {
taskId:any;
  constructor(private route: ActivatedRoute,private _pd:ProductServicesService) {
    this.taskId = route.snapshot.params["ID"];
    console.log("this is taskId value = "+ this.taskId);
 }

  ngOnInit() {}

}
