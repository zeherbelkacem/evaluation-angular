import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageNavBarComponent } from './manage-nav-bar.component';

describe('ManageNavBarComponent', () => {
  let component: ManageNavBarComponent;
  let fixture: ComponentFixture<ManageNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageNavBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
