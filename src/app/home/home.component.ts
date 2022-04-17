import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormArray,Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private _apiSignupURL:string="http://localhost:3000/webapi/userSignUp"
  public output:any
  

  
  constructor(private _http:HttpClient) { }

  ngOnInit() {
    
  }
  onClickSubmit(userDetails:any)
  {
  this._http.post(this._apiSignupURL,userDetails).subscribe((data:any)=>{
      
    
  

     alert("response get back")
    
    console.log(userDetails)
     
     
    })  
  

  }
  resetUserForm(usersignup:NgForm)
  {
    usersignup.resetForm()

  }
}
