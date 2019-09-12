import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkExperienceComponent } from './work-experience.component';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule, MatExpansionModule } from '@angular/material';

const routes: Routes = [{
  path: '',
  component: WorkExperienceComponent,
}];

@NgModule({
  declarations: [WorkExperienceComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    MatExpansionModule,
  ],
  exports: [WorkExperienceComponent],
})
export class WorkExperienceModule { }
