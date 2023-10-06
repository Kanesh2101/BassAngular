import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  menuList: any[];
  title = 'bassApp';
  

  ngOnInit(){
    this.menuList = [];
  this.menuList =[
    {
      label:'Dashboard', 
      routerLink: 'home'
    }
  ];
}
}
