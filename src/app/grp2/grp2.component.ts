import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grp2',
  templateUrl: './grp2.component.html',
  styleUrls: ['./grp2.component.css']
})
export class Grp2Component implements OnInit {

  constructor(private _rout:Router) { }

  ngOnInit(): void {
  }

  back(){
    this._rout.navigate(["/groups"])
  }

}
