import { Component } from '@angular/core';
import { WorkExperience } from '../models/models';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent {
  workExpList: WorkExperience[] =[
    {
      role:'Associate Engineer',
      company:'Nagarro',
      duration:'Mar 2023 - Present',
      description:[' Currently working on enhancing skills to develop websites using ASP.Net and Angular including SSMS.',
      ' Working on various development frameworks including Angular, ASP .Net, HTML/CSS, and JS.',
      ' Completed websites like Personal Portfolio, Book Store Management, and Car Rental Website.'],
    },
    {
      role:'Software Developer Intern',
      company:'ATMS Tech PVT Ltd',
      duration:'July 2022 - Oct 2022',
      description:['Completed ongoing projects based on the client requirements while working with seniors.',
      'Successfully created a virtual setup for automation scripts to test and fix bugs.',
      'Design and implementation of multi-tier(DB, services, and web) software applications, and documents, test, fix and enhance systems when needed.'],
    },
  ];
}
