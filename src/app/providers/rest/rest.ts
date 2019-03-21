import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
  constructor(public http: HttpClient) {
  }

//   loginInstructor(credentials) {
//     return new Promise((resolve, reject) => {
//       let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
//       let body = new HttpParams()
//       .set('username', credentials.username)
//       .set('password', credentials.password);

//       this.http.post(
//         'https://self-raising-distre.000webhostapp.com/class_management/instructors/login',
//         body,
//         {
//           headers: headers
//         }
//       ).subscribe(data => {          
//         console.log(data);
//         resolve(data);
//       }, err => {          
//         console.log(err);
//         reject(err);
//       });
//     });
//   }

  registerInstructor(data) {
    return new Promise((resolve, reject) => {
      let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
      let body = new HttpParams()
      .set('firstname', data.firstname)
      .set('middlename', data.middlename)
      .set('lastname', data.lastname)
      .set('username', data.username)
      .set('job_title', data.job_title)
      .set('password', data.password)
      .set('birthday', data.birthday)
      .set('address', data.address)
      .set('gender', data.gender)
      .set('contact', data.contact);

      this.http.post(
        'https://self-raising-distre.000webhostapp.com/class_management/instructors/add',
        body,
        {
          headers: headers
        }
      ).subscribe(data => {
        console.log(data);
        resolve(data);
      }, err => {
        console.log(err);
        reject(err);
      });
    });
  }

  logoutUser() {
    return new Promise((resolve, reject) => {
    //   var auth = JSON.parse(window.localStorage.getItem('auth'));
    //   let headers = new HttpHeaders()
    //     .set('Content-Type', 'application/json')
    //     .set('X-Api-Token', 'MTAwOjokMnkkMTAkSlVNVnJ5dWhndTgwbkQwYmFoMUU3ZUZoSFdIZkNLQ3NQV1lSazhDaFJmZ3haNXdzeFMzUks=')
    //     .set('X-User-Token', auth.userToken);
      this.http.get(
        'https://self-raising-distre.000webhostapp.com/class_management/instructors/logout',   
        // {
        //   headers: headers
        // }
      ).subscribe(data => {
        resolve(data);
      }, err => {
        reject(err);
      });
    });
  }
}