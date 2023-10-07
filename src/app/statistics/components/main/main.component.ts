import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuList } from 'src/menuitems.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [MenuList]
})
export class MainComponent {
  items: any[];
  path: string[];
  reroutePath : string;

  constructor(private activatedRoute: ActivatedRoute,private service: MenuList, private router: Router){}

  ngOnInit() {
    console.log("activateRoute", this.activatedRoute);
    this.items= [{
      level1Menu: 'PI',
      innerMenu: [{
          innerlabel: 'Chart 1',
          router: ''
      },{
        innerlabel: 'Chart 2',
        router: ''
      }],
      
      },{
    level1Menu: 'My Research',
      }]

      this.path = [];
    let currentPath = this.getCurrentPath();
    this.reroutePath = this.getCurrentPath();
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
    console.log("path", this.path);
  }

  rerouteOnClick(path: string){
    let tempPath = this.getCurrentPath();
    let indx = tempPath.lastIndexOf(path);
    console.log("index",indx);
    let substr = tempPath.substring(0,indx+path.length);
    console.log("sub", substr);
    this.reroutePath = substr;
  }

  getCurrentPath(){
    console.log("activateRoutePageOne", this.router.url);
    let currentPath = this.router.url;
    return currentPath;
  }
}
