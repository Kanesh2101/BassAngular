import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-navibar',
  templateUrl: './main-navibar.component.html',
  styleUrls: ['./main-navibar.component.css']
})
export class MainNavibarComponent {

  @Input()  menuList: any;
  // menuList : any[]; 

  ngonInit(){
    // console.log("menu home", this.menu);
    // this.menuList = [ ];
    // // this.menuList = this.menu; 
    // this.menuList =[
    //   {
    //     label:'Procurement', 
    //     routerLink: 'Procurement'
    //   },
    //   {
    //     label:'Project', 
    //     routerLink: 'pageone'
    //   },

    // ];

  }
}
