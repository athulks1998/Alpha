import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  descriptionData: string ="A password goes through many validations. Please make sure u have satisfied the below validations";
  bulletData : string[] =["Password must contain atleast 12 characters", "Password must not be empty"];



}
