import { Component, OnInit } from '@angular/core';
import {NgForm } from '@angular/forms';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {

  private apiURL:string="http://localhost:3000/webapi/userSignUp"

  text1:string = 'Join Group';
  text2:string = 'Join Group';
  text3:string = 'Join Group';
  text4:string = 'Join Group';
  

  constructor(){
  }

  ngOnInit(): void {
  }

   changeText1(){
    if (this.text1 == 'Join Group'){
      this.text1='Leave Group'
      alert('Now you are the member of our group')
      return this.text1
    }else{
      this.text1='Join Group'
      alert('Now you are no longer member of our group')
      return this.text1
    }
  }

  changeText2(){
    if (this.text2 == 'Join Group'){
      this.text2='Leave Group'
      alert('Now you are the member of our group')
      return this.text2
    }else{
      this.text2='Join Group'
      alert('Now you are no longer member of our group')
      return this.text2
    }
  }

  changeText3(){
    if (this.text3 == 'Join Group'){
      this.text3='Leave Group'
      alert('Now you are the member of our group')
      return this.text3
    }else{
      this.text3='Join Group'
      alert('Now you are no longer member of our group')
      return this.text3
    }
  }

  changeText4(){
    if (this.text4 == 'Join Group'){
      this.text4='Leave Group'
      alert('Now you are the member of our group')
      return this.text4
    }
    
    
    else{
      this.text4='Join Group'
      alert('Now you are no longer member of our group')
      return this.text4
    }
  }
  
}
