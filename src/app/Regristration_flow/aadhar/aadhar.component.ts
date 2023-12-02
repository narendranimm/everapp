import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-aadhar',
  templateUrl: './aadhar.component.html',
  styleUrls: ['./aadhar.component.scss'],
})
export class AadharComponent  implements OnInit {

  constructor(private _pf:FormBuilder) {
    this.personalForm=this._pf.group({
      adharno:'',
      adharfile:'',
      licenseno:'',
      licensefile:'',
      panno:'',
      panfile:'',
    

    })
   }
   personalForm:any;
   onSubmit(){
    if(this.personalForm.valid){
   console.log(this.personalForm.value)
    }
  }
  ngOnInit() {}
  @ViewChild(IonContent) content!: IonContent;

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
}
