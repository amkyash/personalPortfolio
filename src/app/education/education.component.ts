import { Component } from '@angular/core';
import { Education } from '../models/models';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {

  educationList: Education[] = [
    {
      institute:'PSIT',
      course:'B.Tech(Honors)',
      duration:'2019-2023',
      score:'83.8%',
    },
    {
      institute:'St Vishna RRN School',
      course:'SSC',
      duration:'2016-2018',
      score:'83.2%',
    },
    {
      institute:'St Vishna RRN School',
      course:'HSC',
      duration:'2014-2016',
      score:'93.2%',
    },
  ]
}
