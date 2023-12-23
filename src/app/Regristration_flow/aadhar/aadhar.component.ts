import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { IonContent } from '@ionic/angular';
import { UploadsuccessComponent } from 'src/app/popups/uploadsuccess/uploadsuccess.component';
import { RegisterService } from 'src/app/registration-services/register.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-aadhar',
  templateUrl: './aadhar.component.html',
  styleUrls: ['./aadhar.component.scss'],
})
export class AadharComponent implements OnInit {
  personalForm!: FormGroup;
  isAdhar: boolean = false
  isvoter: boolean = false;
  islicence: boolean = false
  isDialogOpen!: boolean;
  constructor(private cd: ChangeDetectorRef,public dialog: MatDialog,private router: Router, private _pf: FormBuilder, private http: HttpClient, private rs: RegisterService, private snackBar: MatSnackBar) {
    this.personalForm = this._pf.group({
      adharno: ['', [Validators.required,Validators.pattern("^[0-9]{4}[ -]?[0-9]{4}[ -]?[0-9]{4}$")]],
      adharfile: ['', Validators.required],
      licenseno: ['', Validators.required],
      licensefile: ['', Validators.required],
      panno: ['', Validators.required],
      panfile: ['', Validators.required]
    })
  }


  ngOnInit() {

  }





  onFileSelected(event: any, filename: any) {
    const file: File = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append(filename, file);
      this.uploadtoBackend(event.target.files[0], filename)

    }
  }

  uploadFile(e: any) {
    console.log(e.target.file)
    if (e.target.files) {

    } else {
      alert("Please select a file first")
    }
  }

  uploadtoBackend(file: any, fileName: any) {
    var formdata = new FormData();
    formdata.append("file", file);
    formdata.append("userid", "1000");
    formdata.append("filetype", "voter");
    // setTimeout(() => {
    //   this.loaderService.display(false);
    // }, 800);


    this.rs.uploadFile(file, '1000', fileName).subscribe(
      (response) => {
        // this.loaderService.display(true);
        if(response.status){

          switch (fileName) {
            case 'adhar':
              this.isAdhar = true;
              this.isvoter=true;
              break;
            case 'licence':
              this.islicence = true;
              break;
  
            // case 'voter':
            //   this.isvoter = true
            //   break;
  
            default:
              break;
          }
          this.snackBar.open(`File uploaded successfully`);
        }
      })
  }
  // myupload(){
  //   if(!this.personalForm.valid) {

  //     console.log(this.personalForm.value)
  //     this.snackBar.open(" All fields are required ");
  //     this.router.navigate(['/adhar'])

  //   }else{
  //     this.snackBar.open(" uploaded successfully");
  //     this.router.navigate(['/selfie'])
  //   }
  // }
  myupload() {
  
    if (this.isAdhar && this.isvoter && this.islicence) {
      this.dialog.open(UploadsuccessComponent);
     
      this.cd.detectChanges();
      this.router.navigate(['/selfie'])
    }else{
     
      this.snackBar.open(" Please upload All Files");
     console.log( this.personalForm.value)
        
   
  }
  
}
  
}
