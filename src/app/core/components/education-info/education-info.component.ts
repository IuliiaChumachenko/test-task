import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education-info',
  templateUrl: './education-info.component.html',
  styleUrls: ['./education-info.component.scss']
})
export class EducationInfoComponent implements OnInit {
  public educationInfo = [
    {
      "name": "Odessa National Polytechnic University",
      "value": 5
    },
    {
      "name": "Odessa National Economic University",
      "value": 5
    },
    {
      "name": "Hillel Front-End Pro",
      "value": 0.25
    },
    {
      "name": "Andersen Internship (Angular)",
      "value": 0.2
    }
  ];


  constructor() { }

  ngOnInit() {
  }

}
