import {Component, OnInit} from '@angular/core';
import {DefaultService} from '../http-client';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  loginUser() {
    // this.apiGateway.loginUserOMS()
  }
}
