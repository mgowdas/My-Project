import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlserviceService } from '../urlservice.service';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {



  constructor(private _auth: AuthService, private _router: Router, private _http: HttpClient, private _urlobj: UrlserviceService) { 
  }

  private _apiUrlsignin: string = this._urlobj.apiUrl + "userSignIn"
  public output: any

  ngOnInit(): void {
  }


  onClickSubmit(userDetails: any) {
    this._http.post(this._apiUrlsignin, userDetails).subscribe((data: any) => {
      if (data.token != 'error') {
        localStorage.setItem('token', data.token)
        localStorage.setItem('id', data.userInfo._id)
        localStorage.setItem('name', data.userInfo.name)
        localStorage.setItem('email', data.userInfo.email)
        localStorage.setItem('city', data.userInfo.city)
        localStorage.setItem('state', data.userInfo.state)
        localStorage.setItem('gender', data.userInfo.gender)
        localStorage.setItem('profession', data.userInfo.profession)
        this._router.navigate(['/home'])
      } else {
        this.output = 'Invalid details, please enter the valid details'
      }
    })
  }

  resetDetails(usersignin: NgForm) {
    usersignin.reset()
  }

  checkToken() {
    return this._auth.getToken()
  }

  logout() {
    localStorage.removeItem('token')
    localStorage.removeItem('id')
    localStorage.removeItem('name')
    localStorage.removeItem('email')
    localStorage.removeItem('city')
    localStorage.removeItem('state')
    localStorage.removeItem('gender')
    localStorage.removeItem('profession')
    this._router.navigate(['/'])
  }

}
