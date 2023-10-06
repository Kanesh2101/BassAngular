import { Component } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent {
  menuList: { label: string; routerLink: string; }[];
  ngOnInit() {
   
    this.menuList =[
      {
        label:'Tasks', 
        routerLink: 'work'
      },
      {
        label:'To-do', 
        routerLink: 'work'
      },

    ];
}
}
