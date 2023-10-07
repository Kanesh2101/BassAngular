import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuList } from 'src/menuitems.service';

@Component({
  selector: 'app-navibar',
  templateUrl: './navibar.component.html',
  styleUrls: ['./navibar.component.css'],
  providers: [MenuList]
})
export class NavibarComponent {

  @Output() urlVal = new EventEmitter<string>();

  sidebarVisible: boolean = false;  
  menuList: any[];
  menuId: any;
  filteredMenuList: any;
  constructor(private activatedRoute: ActivatedRoute,private router: Router, private service: MenuList){}

  ngOnInit(){
    this.menuList = [ ]; 
    this.menuId = this.activatedRoute.component?.name;
    this.filteredMenuList = this.service.menus.filter(x=> x.id == this.menuId);
    console.log("servicelist", this.service);
    console.log("filteredMenuList", this.filteredMenuList);

    this.menuList =[
      {
        label:'Procurement', 
        routerLink: 'Procurement'
      },
      {
        label:'Project', 
        routerLink: 'Project'
      },

    ];
   
  }

  ngOnChange(){
    this.passVal(this.router.url)
  }
  public passVal(url: any): void {
    this.urlVal.emit(url);
}

  openNav(){
    console.log("test");
  }

  
  /* Set the width of the side navigation to 0 */
  closeNav() {
    console.log("test2");
  }
}
