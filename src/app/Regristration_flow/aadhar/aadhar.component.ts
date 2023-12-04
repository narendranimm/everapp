import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { IonContent } from '@ionic/angular';
import { RegisterService } from 'src/app/registration-services/register.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-aadhar',
  templateUrl: './aadhar.component.html',
  styleUrls: ['./aadhar.component.scss'],
})
export class AadharComponent  implements OnInit {
  constructor(private _pf:FormBuilder,private http:HttpClient,private rs:RegisterService) {
    this.personalForm=this._pf.group({
      adharno:'',
      adharfile:'',
      licenseno:'',
      licensefile:'',
      panno:'',
      panfile:''  

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
 
    this.content.scrollToTop(500);
  }




  onFileSelected(event:any,filename:any) {
    const file:File = event.target.files[0];
    console.log(file)

    if (file) {

        // this.fileName = file.name;

        const formData = new FormData();

        formData.append(filename, file);
        this.uploadtoBackend(event.target.files[0],filename)
        // const upload$ = this.http.post("/api/thumbnail-upload", formData);

        // upload$.subscribe();
    }
}
  
  uploadFile(e:any){
    console.log(e.target.file)
    if (e.target.files) {
      // this.uploadService.uploadfile(this.file).subscribe(resp => {
      //   alert("Uploaded")
      // })
    } else {
      alert("Please select a file first")
    }
  }
  uploadtoBackend(file:any,fileName:any){debugger
    var formdata = new FormData();
formdata.append("file", file);
formdata.append("userid", "1000");
formdata.append("filetype", "voter");


this.rs.uploadFile(file, '1000', fileName).subscribe(
  response => {
  console.log('File uploaded successfully:', response);
}

)
  // .then(response => response.text())
  // .then(result => console.log(result))
  // .catch(error => console.log('error', error));
  }
}
