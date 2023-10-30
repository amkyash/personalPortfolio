import { Component } from '@angular/core';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent {
  myData: string[][] = [
    ['Name', 'Amit Khare'],
    ['DOB', '26 June 2001'],
    ['Education', 'B.Tech(Honors)'],
    ['Interests', 'Travelling'],
  ];
  aboutMe: string[] = [
    'Hi, I am an Enthusiat Software Developer.',
    'Having passion for web application development, I have developed projects using .Net, Angular and Django frameworks. Skilled in conceptualizing, designing, development, and deploying software containing logical and mathematical solutions to business problems. Dedicated to driving innovation with the ability to follow industry and technological trends, and facilitating early adoption of innovations.',
  ];


}
