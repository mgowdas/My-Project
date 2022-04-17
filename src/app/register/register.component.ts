import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UrlserviceService } from '../urlservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _http:HttpClient,private _apiURLobj:UrlserviceService) { }

  private _apiSignupURL:string=this._apiURLobj.apiUrl+"userSignUp"
  public output:any

  ngOnInit(): void {
  }

  onClickSubmit(userDetails:any)
  {
    this._http.post(this._apiSignupURL,userDetails).subscribe((data:any)=>{
      //console.log(data)
      this.output=data.response
    })    
  }

  resetUserForm(usersignup:NgForm)
  {
    usersignup.resetForm()
  }

}
