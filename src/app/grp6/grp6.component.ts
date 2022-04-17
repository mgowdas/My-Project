import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-grp6',
  templateUrl: './grp6.component.html',
  styleUrls: ['./grp6.component.css']
})
export class Grp6Component implements OnInit {

  constructor(private _rout:Router) { }

  ngOnInit(): void {
  }

  back(){
    this._rout.navigate(["/groups"])
  }

}

