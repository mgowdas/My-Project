import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grp1',
  templateUrl: './grp1.component.html',
  styleUrls: ['./grp1.component.css']
})
export class Grp1Component implements OnInit {

  constructor(private _rout:Router) { }

  ngOnInit(): void {
  }

  back(){
    this._rout.navigate(["/groups"])
  }


  
}
