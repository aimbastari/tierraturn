import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageInvestorsComponent } from './manage-investors.component';

describe('ManageInvestorsComponent', () => {
  let component: ManageInvestorsComponent;
  let fixture: ComponentFixture<ManageInvestorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageInvestorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageInvestorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
