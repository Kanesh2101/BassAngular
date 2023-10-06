import { Component } from '@angular/core';

@Component({
  selector: 'app-fleet',
  templateUrl: './fleet.component.html',
  styleUrls: ['./fleet.component.css'],
})


export class FleetComponent {
  menuList: { label: string; routerLink: string; }[];
  ngOnInit() {
   
    this.menuList =[
      {
        label:'Fleet 1', 
        routerLink: ''
      },
      {
        label:'Fleet 2', 
        routerLink: ''
      },

    ];
}
}
