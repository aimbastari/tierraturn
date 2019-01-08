import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { PropertyModel } from './property.model';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor() { }

  public getProperties(): Observable<PropertyModel[]> {
    
    let properties: PropertyModel[] = [];
    properties.push({id: 0, name: "romneya 810", description: "multi-family building in Anaheim", price: 3000000})
    properties.push({id: 1, name: "romneya 811", description: "multi-family building in Anaheim", price: 4000000})
    properties.push({id: 2, name: "romneya 812", description: "multi-family building in Anaheim", price: 5000000})
    properties.push({id: 3, name: "romneya 813", description: "multi-family building in Anaheim", price: 6000000})

    return of(properties);
  }


}
