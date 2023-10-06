import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chart1',
  templateUrl: './chart1.component.html',
  styleUrls: ['./chart1.component.css']
})
export class Chart1Component {

  constructor(private router: Router){}

  path: string[];
  reroutePath : string;
  ngOnInit() {
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

      // this.items = [{ label: 'Computer', routerLink:'' }, { label: 'Notebook' }, { label: 'Accessories' }, { label: 'Backpacks' }, { label: 'Item' }];

      // this.home = { icon: 'pi pi-home', routerLink: '/' };
  }

  rerouteOnClick(path: string){
    console.log(path);
    //reversing the path to get the clicked value
    // let tempName
    // for(let i = path.length; i> 0 ; i--){   
    //   let currel = path[i];
    //   if(currel == '/' || i == path.length){
    //     if(tempName.length>0){
    //       console.log("tempName", tempName)
    //       this.path.push(tempName);
    //     }
    //     tempName = "";
    //     continue;
    //   }else{
    //     tempName += currentPath[i];
    //   }
    // }
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
