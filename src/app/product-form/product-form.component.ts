import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup , Validators , FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import{ GoogleAnalyticsService } from '../google-analytics.service';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  form: FormGroup;

  constructor(public googleAnalyticsService: GoogleAnalyticsService) { 
    this.buildForm();
  }

  ngOnInit(): void {
  }

  private buildForm() {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.email]),
      text: new FormControl('', [Validators.maxLength(200)]),
      category: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
    });

    this.form.valueChanges.pipe(debounceTime(500))
    .subscribe(value => {
      console.log(value);
    });
  }

  save(event: Event) {
    event.preventDefault();
    const value = this.form.value;
    console.log(value);
  }

  SendAddToCartEvent(){
    this.googleAnalyticsService.eventEmitter("search", "barreras_comerciales", "cart", "click", 1);
    console.log("Evento Click test!!");
  }
}
