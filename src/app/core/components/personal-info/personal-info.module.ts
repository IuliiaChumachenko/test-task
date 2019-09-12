import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalInfoComponent } from './personal-info.component';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule, MatCardModule } from '@angular/material';

const routes: Routes = [{
  path: '',
  component: PersonalInfoComponent,
}];

@NgModule({
  declarations: [PersonalInfoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    MatButtonModule,
  ],
  exports: [PersonalInfoComponent],
})
export class PersonalInfoModule { }
