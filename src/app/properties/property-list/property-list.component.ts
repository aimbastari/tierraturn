import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../shared/property.service';
import { Observable } from 'rxjs';
import { PropertyModel } from '../shared/property.model';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  constructor(private propertyService: PropertyService) { }

  properties$: Observable<PropertyModel[]>;

  ngOnInit() {
    this.properties$ = this.propertyService.getProperties();

  }


}
