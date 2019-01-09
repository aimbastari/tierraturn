import { Component, OnInit, Output } from '@angular/core';
import { PropertyService } from '../shared/property.service';
import { Observable } from 'rxjs';
import { PropertyModel } from '../shared/property.model';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  
  //@Output()
  selectedProperty: PropertyModel;

  properties$: Observable<PropertyModel[]>;

  constructor(private propertyService: PropertyService) { }

  ngOnInit() {
    this.properties$ = this.propertyService.getProperties();

  }


}
