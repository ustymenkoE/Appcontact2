import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from 'src/app/content/User.js';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  private httpClient: HttpClient;
  public users: User[] = [];


  constructor(httpClient: HttpClient)
  {
    this.httpClient = httpClient;
  }

  getUser(){
    return this.httpClient.get<User[]>(("api/users")).subscribe(data => this.users = data)
  }

  ngOnInit() {
    this.getUser();
  }


}


