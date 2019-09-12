import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    MatButtonModule,
  ],
  exports: [HeaderComponent],
})
export class HeaderModule { }
