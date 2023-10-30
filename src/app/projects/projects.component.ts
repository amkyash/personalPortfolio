import { Component } from '@angular/core';
import { Project } from '../models/models';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Grocery Store',
      technologies: 'DotNet & Angular',
      description: ['Created the website for Grocery Management using ASP .Net framework.',
        'Used various CRUD operations and login/logout setup via entity framework',
        'Managed and created the database using Microsoft SSMS.',
        'Ensured website efficiency and navigation via clean code setup'],
    },
    {
      title: 'Car Rental',
      technologies: 'DotNet & Angular',
      description: ['Designed the website of a car rental platform that allows the users to book the vehicles for the time period.',
      'Users can also search for available cars view rates before booking',
        'Used Angular 16 for the frontend UI and designed the API in ASP.Net 6.',
        ' Used clean code practices.'],
},
{
  title: 'Url Shortner',
  technologies: 'Django ',
  description: ['• Created backend framework for URL Shortner website using Django framework.',' Successfully deployed it on the internet using the Heroku server',
    ],
},
  ]

}
