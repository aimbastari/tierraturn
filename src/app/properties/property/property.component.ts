import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {

  @Input()
  id: number;

  @Input()
  name: string;

  @Input()
  description: string;

  @Input()
  price: number;

  constructor() { }

  ngOnInit() {
  }

  

}
