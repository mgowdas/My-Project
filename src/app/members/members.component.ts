import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UrlserviceService } from '../urlservice.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  text1:string = 'Add Friend';
  //public output : members[];

  private _apimembers: string = this._urlobj.apiUrl + "Members"
  public output:any
  
  constructor(private _router: Router,private _http: HttpClient,private _urlobj: UrlserviceService) {
  }

  ngOnInit(): void {
    //this.remove()
    this._http.post(this._apimembers,{title:'Post Response of members'}).subscribe((data:any)=>{
      this.output = data.userInfo
    })
  }
  
  remove(member : any):any{
    return member._id != localStorage.getItem('id');
  }
  changeText1(){
    if (this.text1 == 'Add Friend'){
      this.text1='Request Sent'
      alert('Request Sent')
      return this.text1
    }else{
      this.text1='Add Friend'
      alert('Request cancelled')
      return this.text1
    }
  }
}