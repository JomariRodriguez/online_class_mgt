import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  private username: string;
  posts: any;
  data: any;

  constructor(private authService: AuthenticationService) { 
    var auth = JSON.parse(window.localStorage.getItem('auth'));
    console.log('auth');
    console.log(auth);
    // this.username = auth.userInfo.username;
    // this.data = {
    //   Status: {type: null},
    //   Result: {Posts: null}
    // }
  }
 
  ngOnInit() {
  }
 
  logout() {
    this.authService.logout();
  }

}
