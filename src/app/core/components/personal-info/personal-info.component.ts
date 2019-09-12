import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent {

  constructor(public router: Router) { }

  public showWorkExperience(): void {
    this.router.navigate(['./home/work-experience']);
  }

  public showEducationInfo(): void {
    this.router.navigate(['./home/education-info']);
  }
}
