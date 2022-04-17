import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-grp5',
  templateUrl: './grp5.component.html',
  styleUrls: ['./grp5.component.css']
})
export class Grp5Component implements OnInit {

  constructor(private _rout:Router) { }

  ngOnInit(): void {
  }

  back(){
    this._rout.navigate(["/groups"])
  }

}
