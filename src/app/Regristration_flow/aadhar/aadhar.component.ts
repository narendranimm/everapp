import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder ,FormGroup, Validators} from '@angular/forms';
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
  personalForm!:FormGroup;
  constructor(private router: Router,private _pf:FormBuilder,private http:HttpClient,private rs:RegisterService,private snackBar: MatSnackBar,private loaderService:IonLoaderService ) {
    this.personalForm=this._pf.group({
      adharno:['',Validators.required],
      adharfile:['',Validators.required],
      licenseno:['',Validators.required],
      licensefile:['',Validators.required],
      panno:['',Validators.required],
      panfile:['',Validators.required]  

    })
   }
  

  ngOnInit() {
   
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


this.rs.uploadFile(file, '1000', fileName).subscribe(
 (response) => {
  console.log('File uploaded successfully:', response);
  // this.loaderService.display(true);
  this.snackBar.open(JSON.stringify(response));
 

  this.snackBar.open("upload succesfully");




})
  }
    myupload(){
      if(!this.personalForm.valid) {
    
        console.log(this.personalForm.value)
        this.snackBar.open(" All fields are required ");
        this.router.navigate(['/adhar'])
     
      }else{
        this.snackBar.open(" uploaded successfully");
        this.router.navigate(['/selfie'])
      }
    }

}
