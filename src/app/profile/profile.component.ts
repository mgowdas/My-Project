import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  name=localStorage.getItem('name')
  email=localStorage.getItem('email')
  city=localStorage.getItem('city')
  state=localStorage.getItem('state')
  gender=localStorage.getItem('gender')
  profession=localStorage.getItem('profession')

  
  private _apiSignupURL:string="http://localhost:3000/webapi/userSignUp"
  public output:any
 constructor(private _http:HttpClient) { }
  

  ngOnInit(): void {
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