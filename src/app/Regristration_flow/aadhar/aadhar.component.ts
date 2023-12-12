import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { IonContent } from '@ionic/angular';
import { IonLoaderService } from 'services/Ionic_Loader/ionic_Loader.service';
import { RegisterService } from 'src/app/registration-services/register.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-aadhar',
  templateUrl: './aadhar.component.html',
  styleUrls: ['./aadhar.component.scss'],
})
export class AadharComponent  implements OnInit {
  showLoader!: boolean;
  constructor(private router: Router,private _pf:FormBuilder,private http:HttpClient,private rs:RegisterService,private snackBar: MatSnackBar,private loaderService:IonLoaderService ) {
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
  ngOnInit() {
    this.loaderService.status.subscribe((val: boolean) => {
      this.showLoader = val;
    });
  }
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
  file:any;
  fileName:any;
  uploadtoBackend(file:any,fileName:any){
    var formdata = new FormData();
formdata.append("file", file);
formdata.append("userid", "1000");
formdata.append("filetype", "voter");
// setTimeout(() => {
//   this.loaderService.display(false);
// }, 800);
if(!this.personalForm.valid) {
  this.personalForm.markAllAsTouched();

}else{
  this.snackBar.open("All files need to upload");
}

this.rs.uploadFile(file, '1000', fileName).subscribe(
 (response) => {
  console.log('File uploaded successfully:', response);
  // this.loaderService.display(true);
  this.snackBar.open(JSON.stringify(response));
  this.router.navigate(['/selfie'])
  this.snackBar.open("upload succesfully");

}

)
  // .then(response => response.text())
  // .then(result => console.log(result))
  // .catch(error => console.log('error', error));
  }
  upload(){
   
      this.router.navigate(['/selfie'])
      this.snackBar.open("upload succesfully");
    }

}
