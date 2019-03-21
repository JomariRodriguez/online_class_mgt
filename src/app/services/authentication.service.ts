import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
 
const TOKEN_KEY = 'auth-token';
 
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
 
  authenticationState = new BehaviorSubject(false);
 
  constructor(private storage: Storage, private plt: Platform, public http: HttpClient) { 
    this.plt.ready().then(() => {
      this.checkToken();
    });
  }
 
  checkToken() {
    return this.storage.get(TOKEN_KEY).then(res => {
      if (res) {
        this.authenticationState.next(true);
      }
    })
  }
 
  // login() {
  //   return this.storage.set(TOKEN_KEY, 'Bearer 1234567').then(res => {
  //     this.authenticationState.next(true);
  //   });
  // }
  // loginInstructor(credentials) {
  //   return new Promise((resolve, reject) => {
  //     let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
  //     let body = new HttpParams()
  //     .set('username', credentials.username)
  //     .set('password', credentials.password);

  //     this.http.post(
  //       'https://self-raising-distre.000webhostapp.com/class_management/instructors/login',
  //       body,
  //       {
  //         headers: headers
  //       }
  //     ).subscribe(data => { 
  //       console.log(data);
  //       console.log('tama');
  //       // resolve(this.storage.set(TOKEN_KEY, 'Bearer 1234567').then(res => {
  //       //   this.authenticationState.next(true);
  //       // })
  //       // );
  //       resolve(data);
  //     }, err => {
  //       console.log('mali');
  //       this.authenticationState.next(true);
  //       this.storage.set(TOKEN_KEY, 'Bearer 1234567').then(res => {
  //         this.authenticationState.next(true);
  //       })
  //       reject(err);
  //     });
  //   });
  // }

  async loginInstructor(credentials) {
    try {
      let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
      let body = new HttpParams()
      .set('username', credentials.username)
      .set('password', credentials.password);

      console.log('success login');
      let response = await this.http.post(
        "https://self-raising-distre.000webhostapp.com/class_management/instructors/login", 
        body,
        {
          headers: headers,
          responseType: 'text' as 'json'       
        })
      .toPromise()
      .then(result => {
        console.log("Promise result ", result);
        let res = (JSON.parse(result));
        
        if(res.status == "success") {
          this.authenticationState.next(true);
        } else {
          this.authenticationState.next(false);
        }
      })
      .catch(error => {
        console.log("Promise error ", error);
      });
    } catch (e) {
      console.log('error login');
      console.log(e);
    }

    // try {
    //   let user = await fetchJSON('/users/me');
    //   let friendIDs = await fetchJSON(`/friends/${user.id}`);
    //   let promises = friendIDs.map((id) => {
    //       return fetchJSON(`/users/${id}`);
    //   });
    //   let friends = await Promise.all(promises);
    //   console.log(friends);
    // } catch(error) {
    //     console.log('An error occurred.');
    // }
  }
 
  logout() {
    return this.storage.remove(TOKEN_KEY).then(() => {
      this.authenticationState.next(false);
    });
  }
 
  isAuthenticated() {
    return this.authenticationState.value;
  }
 
}