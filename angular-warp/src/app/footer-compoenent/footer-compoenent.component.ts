import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-compoenent',
  templateUrl: './footer-compoenent.component.html',
  styleUrls: ['./footer-compoenent.component.scss']
})
export class FooterComponent implements OnInit {

  @Input() version:string=''; 

  constructor() { }

  ngOnInit(): void {
  }

}
