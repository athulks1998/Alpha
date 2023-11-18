import { Component, OnInit } from '@angular/core';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  constructor() { }

  isImageRotated: boolean = false;
  rotateImage = () => {
    this.isImageRotated = !this.isImageRotated;
  }

  ngOnInit(): void {
  }
 

}
