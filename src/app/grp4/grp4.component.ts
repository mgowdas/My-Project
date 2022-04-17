import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grp4',
  templateUrl: './grp4.component.html',
  styleUrls: ['./grp4.component.css']
})
export class Grp4Component implements OnInit {

  constructor(private _rout:Router) { }

  ngOnInit(): void {
  }

  back(){
    this._rout.navigate(["/groups"])
  }

}
