import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartPageComponent } from './start-page.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [StartPageComponent],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [
    StartPageComponent
  ],
})
export class StartPageModule { }
