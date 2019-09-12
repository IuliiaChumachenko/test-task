import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { StartPageComponent } from './pages/start-page/start-page.component';

const routes: Routes = [
  { path: 'start', component: StartPageComponent },
  { path: 'home',
    component: HomeComponent,
    children: [
      { path: 'personal-info', loadChildren: './core/components/personal-info/personal-info.module#PersonalInfoModule'},
      { path: 'work-experience', loadChildren: './core/components/work-experience/work-experience.module#WorkExperienceModule'},
      { path: 'education-info', loadChildren: './core/components/education-info/education-info.module#EducationInfoModule'},
      { path: '**', loadChildren: './core/components/personal-info/personal-info.module#PersonalInfoModule'},
    ],
  },
  { path: '**', redirectTo: 'start' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
