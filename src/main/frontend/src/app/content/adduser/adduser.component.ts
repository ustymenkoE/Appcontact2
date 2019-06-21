import { Component, OnInit } from '@angular/core';
import {User} from 'src/app/content/User.js';



@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {


   constructor() {

   }

  ngOnInit() {
  }
 log(x){
   console.log(x);
 }


}
