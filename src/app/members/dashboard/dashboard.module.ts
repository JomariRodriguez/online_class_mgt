import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule, ToastController } from '@ionic/angular';

import { DashboardPage } from './dashboard.page';
import { InstructorService } from 'src/app/services/instructor.service';
import { Instructor } from 'src/app/entities/instructor.entity';
import { Component } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: DashboardPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DashboardPage]
})
export class DashboardPageModule {
  
  instructors: Instructor[];

  constructor(
    private instructorService: InstructorService,
    private toastController: ToastController
  ) {
    this.instructorService.findAll().subscribe(
      res => {
        this.instructors = res;
        console.log(this.instructors);
      },
      async error => {
        // const toast = await this.toastController.create({
        //   message: error,
        //   position: 'bottom'
        // }).present();

        // async presentToast() {
          const toast = await this.toastController.create({
            message: error,
            duration: 2000,
            position: 'bottom'
          });
          toast.present();
        // }
      }
    );

  }

}
