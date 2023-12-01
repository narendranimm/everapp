import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form: FormGroup
  constructor(public dialog: MatDialog,private router: Router,private _rf:FormBuilder) {
    this.registerForm=this._rf.group({
      firstName:'',
      lastName:'',
      email:'',
      country:'',
      mobile:'',
      date:'',
      gender:''

    })



    this.form = new FormGroup({
      favoriteFood: new FormControl("Sushi", Validators.required),
      email: new FormControl("", [Validators.required, Validators.email]),
    });
  }
registerForm!:FormGroup;

  ngOnInit() {}
  onSubmit(){
    if(this.registerForm.valid){
   console.log(this.registerForm.value)
    }
  }
}
