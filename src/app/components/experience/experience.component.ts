import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  experiences = [
    {
      title: 'Full Stack Developer at XOKA IT Solution PLC',
      description: `At XOKA IT Solution PLC, I contributed to full-stack projects such as Land Preparation System, Xoka Email, and Xoka Job Windows service. I also implemented Telebirr integration into Bone Pay Mobile App, participated in Bone Pay (USSD), Land Lease, Land Bank, Substitution, and Lucy ERP.`
    }
  ];
}