import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { Routes, RouterModule } from '@angular/router';
import { HeaderModule } from '../../core/components/header/header.module';

const routes: Routes = [
  { path: 'personal-info', loadChildren: './core/components/personal-info/personal-info.module#PersonalInfoModule'},
  { path: 'work-experience', loadChildren: './core/components/work-experience/work-experience.module#WorkExperienceModule'},
  { path: 'education-info', loadChildren: './core/components/education-info/education-info.module#EducationInfoModule'},
  { path: '**', loadChildren: './core/components/personal-info/personal-info.module#PersonalInfoModule'},
];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HeaderModule,
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
