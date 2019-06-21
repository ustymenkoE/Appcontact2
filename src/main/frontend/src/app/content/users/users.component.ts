import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../User.js";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  private httpClient: HttpClient;
  public users: User[] = [];

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  getUser() {
    return this.httpClient.get<User[]>(("api/users")).subscribe(data => this.users = data)
  }

  ngOnInit() {
    this.getUser();
  }

}





