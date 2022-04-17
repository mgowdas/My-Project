import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-joingroup',
  templateUrl: './joingroup.component.html',
  styleUrls: ['./joingroup.component.css']
})
export class JoingroupComponent implements OnInit {

  constructor(private _rout:Router) { }

  ngOnInit(): void {
  }

  back(){
    this._rout.navigate(["/groups"])
  }

  back1(){
    this._rout.navigate(["/grp1"])
  }


  back2(){
    this._rout.navigate(["/grp2"])
  }

  back3(){
    this._rout.navigate(["/grp3"])
  }
}