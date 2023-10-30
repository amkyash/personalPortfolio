import { Component } from '@angular/core';
import { Skill } from '../models/models';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills: Skill[] = [
    {
      name:'Python',
      level:'',
      rating:80,
    },
    {
      name:'Django',
      level:'',
      rating:60,
    },

    {
      name:'C#',
      level:'',
      rating:60,
    },

    {
      name:'ASP .Net',
      level:'',
      rating:75,
    },
    

    {
      name:'Angular',
      level:'',
      rating:80,
    },
    
    {
      name:'HTML/CSS',
      level:'',
      rating:80,
    },
    
    {
      name:'JavaScript',
      level:'',
      rating:75,
    },

    {
      name:'Git',
      level:'',
      rating:85,
    },
    
  ]

}
