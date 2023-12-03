import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonContent } from '@ionic/angular';
import { ProductServicesService } from 'services/product-services/product-services.service';

@Component({
  selector: 'app-hublists',
  templateUrl: './hublists.component.html',
  styleUrls: ['./hublists.component.scss'],
})
export class HublistsComponent  implements OnInit {

  taskId:any;
  @ViewChild(IonContent) content!: IonContent;
 constructor(private route: ActivatedRoute,private _pd:ProductServicesService) {
   this.taskId = route.snapshot.params["ID"];
   console.log("this is taskId value = "+ this.taskId);
}

  ngOnInit() {}
  // @ViewChild(IonContent) content!: IonContent;

  // scrollToBottom() {
  //   // Passing a duration to the method makes it so the scroll slowly
  //   // goes to the bottom instead of instantly
  //   this.content.scrollToBottom(500);
  // }

  // scrollToTop() {
  //   // Passing a duration to the method makes it so the scroll slowly
  //   // goes to the top instead of instantly
  //   this.content.scrollToTop(500);
  // }
  
}
