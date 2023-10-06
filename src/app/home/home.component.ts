import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  
  items: string[];
  menuList: { label: string; routerLink: string; }[];

  ngOnInit() {
      this.menuList =[
        {
          label:'Dashboard', 
          routerLink: 'fleet'
        },
      ];
  }
}