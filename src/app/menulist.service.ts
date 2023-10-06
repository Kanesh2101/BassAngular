import { Injectable } from '@angular/core';
import { MenuList } from 'src/menuitems.service';

@Injectable({
  providedIn: 'root'
})
export class MenulistService {
  menus : any[];
  constructor() { 

      this.menus = [
          {
              id: 4,
              sideMenu: [{
                  label:'Procurement',
                  innerMenu: [{
                      megamenu: [{
                          level1Menu: 'PI',
                          dropMenu: [{
                              innerlabel1: 'Chart 1',
                              innerLabel2: 'Chart2'
                          }],
                          level2Menu: 'My Research',
                      }]
                  }],
                  
                  
                  
              },{
                  label:'Project',
                  innerMenu: [{
                      megamenu: [{
                          level1Menu: 'PI',
                          dropMenu: [{
                              innerlabel1: 'Chart 1',
                              innerLabel2: 'Chart2'
                          }],
                      level2Menu: 'My Research',
                      }]
                  }]
              }],
             
              
          }
      ]
  }
  
  
  
  
}
