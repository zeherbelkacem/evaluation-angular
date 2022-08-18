import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { User } from 'src/app/auth/models/user';
import { UserService } from 'src/app/auth/service/user.service';
import { Address } from 'src/app/models/address';
import { City } from 'src/app/models/city';
import { Hotel } from 'src/app/models/hotel';
import { ImageModel } from 'src/app/models/image';
import { CityService } from 'src/app/services/city.service';
import { HotelService } from 'src/app/services/hotel.service';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-save-hotel',
  templateUrl: './save-hotel.component.html',
  styleUrls: ['./save-hotel.component.css'],
})
export class SaveHotelComponent implements OnInit {
  /****************IMAGE START*/
  uploadedImage!: File;
  imageModels!: ImageModel[];
  url: any; //To view the changed image

  hotelToAdd: Hotel = {
    id: 0,
    name: '',
    phone: '',
    address: {} as Address,
    star: 0,
    city: {} as City,
    images: [],
    user: {} as User,
  };
  /****************IMAGE END*/
  hotelForm!: FormGroup;
  listCities!: City[];
  listManagers!: User[];
  constructor(
    private userService: UserService,
    private imageService: ImageService,
    private sanitizer: DomSanitizer,
    private hotelService: HotelService,
    private cityService: CityService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cityService.getAllCities().subscribe((cities) => {
      this.listCities = cities;
    });
    this.userService.getUsersByRole("MANAGER").subscribe((managers) => {
      this.listManagers = managers;
    });
    /*Init hotelForm formgroup */
    this.hotelForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      address2: [''],
      codeZip: ['', Validators.required],
      town: ['', Validators.required],
      country: ['', Validators.required],
      star: [1, Validators.required],
      city: [{}, Validators.required],
      manager: [{}, Validators.required],
    });
  }

  onSaveHotel(form: FormGroup) {
    console.log(form.value);

    this.hotelToAdd.name = form.value.name;
    this.hotelToAdd.phone = form.value.phone;
    this.hotelToAdd.address = {
      address: form.value.address,
      address2: form.value.address2,
      codeZip: form.value.codeZip,
      town: form.value.town,
      country: form.value.country,
    };
    this.hotelToAdd.star = form.value.star;
    this.hotelToAdd.city = form.value.city;
    this.hotelToAdd.user = form.value.manager;

    /** */
    const formData: FormData = this.preparePostFormData(this.hotelToAdd);
    this.hotelService.saveHotel(formData).subscribe((data) => {
      console.log(data);
    });
    this.router.navigate(['/adminHotels'])
  .then(() => {
    window.location.reload();
  });
  }

  preparePostFormData(hotel: Hotel): FormData {
    const formData = new FormData();
    formData.append(
      'hotel',
      new Blob([JSON.stringify(hotel)], { type: 'application/json' })
    );
    for (let i = 0; i < hotel.images.length; i++) {
      formData.append(
        'imageFile',
        hotel.images[i].file,
        hotel.images[i].file.name
      );
    }

    return formData;
  }

  /**
   *
   * @param event
   */
  public onImageUpload(event: any) {
    // this.uploadedImage = event.target.files[0];
    if (event.target.files) {
      const file = event.target.files[0];
      const name = event.target.files[0].name;
      const imageMod: ImageModel = {
        file: file,
        url: this.sanitizer.bypassSecurityTrustUrl(
          window.URL.createObjectURL(file)
        ),
        name: name,
      };
      this.hotelToAdd.images.push(imageMod);
      // this.imageModels.push(imageMod);
    }

    var reader = new FileReader();
    console.log(event.target.files[0]);
    reader.onload = (event: ProgressEvent) => {
      this.url = (<FileReader>event.target).result;
    };

    reader.readAsDataURL(event.target.files[0]);
  }
}
