import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-stat-breadcrumb',
  templateUrl: './stat-breadcrumb.component.html',
  styleUrls: ['./stat-breadcrumb.component.css']
})
export class StatBreadcrumbComponent {
  constructor(private router: Router, private activeRoute: ActivatedRoute){}


  path: string[];
  reroutePath : string;
  ngOnInit() {
    
    this.path = [];
    this.reroutePath = this.getCurrentPath();
    
    let currentPath = this.getCurrentPath();
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

  ngOnChanges(){
    console.log("current stat route,", this.activeRoute);
  }

  populateBreadcrumb(){
    this.path = [];
    let currentPath = this.getCurrentPath();
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
    console.log(path);
    this.populateBreadcrumb();
    let tempPath = this.getCurrentPath();
    let indx = tempPath.lastIndexOf(path);
    console.log("index",indx);
    let substr = tempPath.substring(0,indx+path.length);
    console.log("sub", substr);
    this.reroutePath = substr;
  }

  ngOnChange(){
    console.log("statBreadcrumb route", this.router.url);

  }
  getCurrentPath(){
    console.log("statBreadcrumb route", this.router.url);
    let currentPath = this.router.url;
    return currentPath;
  }


}
