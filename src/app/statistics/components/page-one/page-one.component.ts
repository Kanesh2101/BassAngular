import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem } from 'primeng/api'; 
import { MenuList } from 'src/menuitems.service';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.css']
})
export class PageOneComponent {

  constructor(private activatedRoute: ActivatedRoute,private service: MenuList, private router: Router){}
  
  items: MenuItem[] = [];

  home: MenuItem ;
  path: string[];

  ngOnInit() {
    this.path = [];
    console.log("activateRoutePageOne", this.router.url);
    let currentPath = this.router.url;
    let tempName = "";
    for(let i = 0; i <= currentPath.length; i++){
      
      let currel = currentPath[i];
      if(currel == '/' || i == currentPath.length){
        if(tempName.length>0){
          console.log("tempName", tempName)
          this.path.push(tempName);
        }
        tempName = "";
        continue;
      }else{
        tempName += currentPath[i];
      }
    }
  }
}
