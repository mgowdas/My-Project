import { Component, OnInit } from '@angular/core';
import {NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-joinhr',
  templateUrl: './joinhr.component.html',
  styleUrls: ['./joinhr.component.css']
})
export class JoinhrComponent implements OnInit {

  constructor(private _rout:Router) { }

  ngOnInit(): void {
  }

  back(){
    this._rout.navigate(["/groups"])
  }

  back1(){
    this._rout.navigate(["/grp4"])
  }


  back2(){
    this._rout.navigate(["/grp5"])
  }

  back3(){
    this._rout.navigate(["/grp6"])
  }
}