import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tierraturn';

  items: MenuItem[];

  ngOnInit() {
      this.items = [
          {label: 'Properties', icon: 'fa fa-fw fa-building', routerLink: [{ outlets: { primary: ['properties'] } }]},
          {label: 'Investors', icon: 'fa fa-fw fa-user', routerLink: ['investors']},
          {label: 'Admin', icon: 'fa fa-fw fa-support', routerLink: ['admin']},
          {label: 'Social', icon: 'fa fa-fw fa-twitter', routerLink: ['social']},
      ];
  }

}
