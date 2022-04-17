import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-grp3',
  templateUrl: './grp3.component.html',
  styleUrls: ['./grp3.component.css']
})
export class Grp3Component implements OnInit {

  constructor(private _rout:Router) { }

  ngOnInit(): void {
  }

  back(){
    this._rout.navigate(["/groups"])
  }

}
