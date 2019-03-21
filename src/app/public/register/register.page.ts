import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn, Form } from '@angular/forms';
import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  private firstname: string;
  private middlename: string;
  private lastname: string;
  // private image: string;
  private username: string;
  private job_title: string;
  private password: string;
  private birthday: string;
  private address: string;
  private gender: number;
  private contact: number;

  constructor(public restProvider: RestProvider) {}

  ngOnInit() {
  }

  submit() {
    let data = {
      'firstname': this.firstname,
      'middlename': this.middlename,
      'lastname': this.lastname,
      // 'image': this.image,
      'username': this.username,
      'job_title': this.job_title,
      'password': this.password,
      'birthday': this.birthday,
      'address': this.address,
      'gender': this.gender,
      'contact': this.contact
    };
    
    this.restProvider.registerInstructor(data);
    
  }

}
