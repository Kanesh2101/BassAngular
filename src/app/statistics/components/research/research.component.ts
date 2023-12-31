import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.css']
})
export class ResearchComponent {
  
  constructor(private router: Router){}


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
    this.populateBreadcrumb();
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
