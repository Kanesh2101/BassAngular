import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-navibar',
  templateUrl: './main-navibar.component.html',
  styleUrls: ['./main-navibar.component.css']
})
export class MainNavibarComponent {

  @Input()  menuList: any;

  ngonInit(){
  }
}
