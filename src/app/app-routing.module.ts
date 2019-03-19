import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'register', loadChildren: './public/register/register.module#RegisterPageModule' },
  { path: 'login', loadChildren: './public/login/login.module#LoginPageModule' },
  { 
    path: 'members', 
    canActivate: [AuthGuardService],
    loadChildren: './members/member-routing.module#MemberRoutingModule'
  },  { path: 'attendances', loadChildren: './attendances/attendances.module#AttendancesPageModule' },
  { path: 'students', loadChildren: './students/students.module#StudentsPageModule' },
  { path: 'subjects', loadChildren: './subjects/subjects.module#SubjectsPageModule' },
  { path: 'soon', loadChildren: './soon/soon.module#SoonPageModule' },
  { path: 'terms', loadChildren: './terms/terms.module#TermsPageModule' },
  { path: 'student-register', loadChildren: './student-register/student-register.module#StudentRegisterPageModule' },
  { path: 'student-profile', loadChildren: './student-profile/student-profile.module#StudentProfilePageModule' },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
