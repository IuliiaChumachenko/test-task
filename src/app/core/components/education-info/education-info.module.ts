import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EducationInfoComponent } from './education-info.component';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material';
import { NgxChartsModule } from '@swimlane/ngx-charts';

const routes: Routes = [{
  path: '',
  component: EducationInfoComponent,
}];

@NgModule({
  declarations: [EducationInfoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    NgxChartsModule,
  ],
  exports: [EducationInfoComponent],
})
export class EducationInfoModule { }
