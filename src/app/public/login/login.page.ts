import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  private username: string;
  private password: string;
  data: any;

  constructor(private authService: AuthenticationService, public restProvider: RestProvider) {
    this.data = {
      Status: {type: null, message: null},
      Result: {User: {final_token: null}}
    }
  }

  ngOnInit() {
  }
  
  login() {
    if(!this.username || !this.password) {
      var parent = document.getElementById('error-container');
      var error = document.createElement('div');
      error.setAttribute('style', 'text-align: center; color: red;');
      error.innerHTML = 'Username and Password is required.';
      parent.insertBefore(error, parent.firstChild);
      setTimeout(function(){ parent.removeChild(parent.firstChild); }, 4000);
      return;
    }
    let credentials = {
      'username': this.username,
      'password': this.password
    };

    let result = this.authService.loginInstructor(credentials);
    console.log(result);
  }
}
