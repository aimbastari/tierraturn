import { PropertyModel } from './../shared/property.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {

  @Input()
  property: PropertyModel;

  constructor() { }

  ngOnInit() {
  }

  

}
