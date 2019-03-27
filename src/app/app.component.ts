import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';
import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authenticationService: AuthenticationService,
    private router: Router,
    private authService: AuthenticationService
  ) {
    this.initializeApp();
  }

  logout() {
    this.authService.logout();
  }

  public appPages = [
    {
      title: 'Profile',
      url: '/members/dashboard',
      // icon: 'home'
    },
    {
      title: 'Attendances',
      url: '/attendances',
      // icon: 'home'
    },
    {
      title: 'Students',
      url: '/students',
      // icon: 'home'
    }
  ];

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      setTimeout(()=>{
        this.splashScreen.hide();  
      },1000);
      this.authenticationService.authenticationState.subscribe(state => {
        console.log("Auth changed: ", state);
        if (state) {
          this.router.navigate(['members', 'dashboard']);
        } else {
          this.router.navigate(['login']);
        }
      });
    });
  }
}
