import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitiesNavBarComponent } from './cities-nav-bar.component';

describe('CitiesNavBarComponent', () => {
  let component: CitiesNavBarComponent;
  let fixture: ComponentFixture<CitiesNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitiesNavBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CitiesNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
