import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuList } from 'src/menuitems.service';

@Component({
  selector: 'app-navibar',
  templateUrl: './navibar.component.html',
  styleUrls: ['./navibar.component.css'],
  providers: [MenuList]
})
export class NavibarComponent {
  sidebarVisible: boolean = false;  
  menuList: any[];
  menuId: any;
  filteredMenuList: any;
  constructor(private activatedRoute: ActivatedRoute,private service: MenuList){}

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
        routerLink: 'Research'
      },

    ];
   
    // this.service.menus.forEach(item=>{
    //   console.log("item", item);
    //   item.sideMenu.forEach(item2=>{
    //     console.log("item2", item2.label);
    //     if(item2 != null){
    //       this.menuList.push(item2.label);
    //     }
        
    //   })
    // })

  //   this.filteredMenuList.forEach((item: { sideMenu: any; })=>{
  //     console.log("filteritem", item.sideMenu);
  //     item.sideMenu.forEach((menu: { label: string; } | null)=>{
  //       if(menu != null){
  //         this.menuList.push(menu.label);
  //       }
  //     })
  //   })
  //   console.log("menulist", this.menuList);
  }

  openNav(){
    console.log("test");
  }

  
  /* Set the width of the side navigation to 0 */
  closeNav() {
    console.log("test2");
  }
}
