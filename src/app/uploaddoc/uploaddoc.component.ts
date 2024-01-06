import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RegisterService } from '../registration-services/register.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-uploaddoc',
  templateUrl: './uploaddoc.component.html',
  styleUrls: ['./uploaddoc.component.scss'],
})
export class UploaddocComponent implements OnInit {
  personalForm!: FormGroup;
  isAdhar: boolean = false
  isvoter: boolean = false;
  islicence: boolean = false
  isAdharFile: boolean = false
  isDRFIle: boolean = false;
  isPanFile: boolean = false
  isDialogOpen!: boolean;
  adhar: any[] = [];
  licence: any[] = [];
  voter: any[] = [];
  frontA: any;
  BackA: any;
  isFrontA = false;
  isBackA = false;
  isAllFIles: boolean = false;

  constructor(private _pf: FormBuilder, public snackbar: MatSnackBar,
    public dialog: MatDialog, private router: Router, private http: HttpClient, private rs: RegisterService, private snackBar: MatSnackBar) {
    this.personalForm = this._pf.group({
      adharno: ['', Validators.required],
      adharfile: ['',],
      licenseno: ['', Validators.required],
      licensefile: ['',],
      panno: ['', Validators.required],
      panfile: ['',]
    })
  }
  ngOnInit() { }

  onAdharSelected(event: any, filename: any) {
    const file: File = event.target.files[0];

    if (file) {
      const formData = new FormData();
      formData.append(filename, file);
      if (this.adhar.length <= 0 || this.adhar[0].adharFront == undefined) {
        this.adhar.push({ "adharFront": file.name })
        this.isFrontA = true;
        this.frontA = this.adhar[0].adharFront;
        this.filedata.AadharImage = this.frontA;
        console.log(this.adhar)
        console.log(this.frontA)
        // this.uploadtoBackend(file, filename)
      }
      else if (this.adhar.length > 0 && this.adhar.length < 2) {
        this.adhar.push({ "adharBack": file.name })
        this.BackA = this.adhar[1].adharBack
        this.filedata.AadharImage = this.frontA;

        this.isBackA = true;
        console.log(this.adhar)
        this.isAdharFile = true;
        //this.uploadtoBackend(file, filename)
      }

    }
  }
  onLicenseSelected(event: any, filename: any) {
    const file: File = event.target.files[0];

    if (file) {
      const formData = new FormData();
      formData.append(filename, file);
      console.log(file.name)
      if (this.licence.length === 0 ) {
        this.licence.push({ "licenceFront": file.name })
        this.filedata.DRImage = file.name;

        console.log(this.licence[0].licenceFront)
        // this.uploadtoBackend(file, filename)
      }
      else if (this.licence.length > 0 && this.licence.length < 2) {
        this.licence.push({ "licenceBack": file.name })
        this.filedata.DRImageB = file.name;
        this.isDRFIle = true;
        //this.uploadtoBackend(file, filename)
      }
    }
  }

  onPanSelected(event: any, filename: any) {
    const file: File = event.target.files[0];

    if (file) {
      const formData = new FormData();
      formData.append(filename, file);
      console.log(file.name)
      if (this.voter.length === 0) {
        this.voter.push({ "voterFront": file.name })
        this.filedata.PANImage = file.name;

        // this.uploadtoBackend(file, filename)
      }
      else if (this.voter.length > 0 && this.voter.length < 2) {
        this.voter.push({ "voterBack": file.name })
        this.filedata.PANImageB = file.name;
        this.isPanFile = true;
        console.log(this.voter)
        //this.uploadtoBackend(file, filename)
        if (this.isAdharFile && this.isPanFile && this.isDRFIle) {
          this.isAllFIles = true;
        }
      }
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
        if (response.status) {

          switch (fileName) {
            case 'adhar':
              this.isAdhar = true;
              this.isvoter = true;
              this.islicence = true;
              break;
            // case 'licence':
            //   this.islicence = true;
            //   break;

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
  removeAdhar(index: number): void {
    this.adhar.splice(index, 1);
    console.log(this.adhar)
  }
  removeFrontA(): void {
    this.frontA = null;
    this.adhar.splice(0, 1);
    console.log(this.adhar)
  }

  removeBackA(): void {
    this.isBackA = false;
    this.BackA = null;
    this.adhar.splice(1, 1);
    console.log(this.adhar)
  }

  gotonext() {
    if (!this.isAllFIles) {
      this.snackbar.open('Please Upload All Files');
      return
    }
    console.log(this.filedata)
    alert('')
  }

  filedata: any =
    {
      "UserID": 0,
      "AadharNo": "",
      "PAN": "",
      "DR": "",
      "AadharImage": null,
      "AadharImageB": null,
      "PANImage": null,
      "PANImageB": null,
      "DRImage": null,
      "DRImageB": null,
      "BankName": "Example Bank",
      "BankAccountNo": "1234567890",
      "IFSC": "ABCD0123456",
      "BankAccountType": 100,
      "IsActive": true

    }

}

