import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-memberprofile',
  templateUrl: './memberprofile.component.html',
  styleUrls: ['./memberprofile.component.css']
})
export class MemberprofileComponent implements OnInit {

  constructor(private _router:Router,private _http:HttpClient) { }

  ngOnInit(): void {
  }

  back(){
    this._router.navigate(['/members'])
  }

}
