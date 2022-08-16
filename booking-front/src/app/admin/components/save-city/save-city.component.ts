import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CityService } from 'src/app/services/city.service';

@Component({
  selector: 'app-save-city',
  templateUrl: './save-city.component.html',
  styleUrls: ['./save-city.component.css']
})
export class SaveCityComponent implements OnInit {
  myCityForm!: FormGroup;

  constructor(private cityService: CityService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.myCityForm = this.fb.group({
      id:[0],
      name:['', Validators.required],
      department:[, Validators.required]
    })
  }

  /**
   * 
   * @param myCityForm 
   */
  onSaveCity(myCityForm: FormGroup){
    
      this.cityService.postCity(myCityForm.value).subscribe(savedCity=>{
        console.log(savedCity);
      });
      this.router.navigateByUrl("/adminCities")
  }
}
