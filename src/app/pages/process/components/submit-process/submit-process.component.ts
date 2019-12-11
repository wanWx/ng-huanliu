import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PRODUCT } from '../../../../config';

@Component({
  selector: 'app-submit-process',
  templateUrl: './submit-process.component.html',
  styleUrls: ['./submit-process.component.scss']
})
export class SubmitProcessComponent implements OnInit {
  validateForm: FormGroup;

  product = PRODUCT;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.validateForm = this.fb.group({
      headline: [null, [Validators.required]],
      demand_product: ['', [Validators.required]],
      title: [null, [Validators.required]],
      feedback_source: [null, [Validators.required]],
      feedback_city: [null, [Validators.required]],
      feedback_name: [null, [Validators.required]],
      feedback_time: [null, [Validators.required]],
      status: [null, [Validators.required]],
      opType: [null, [Validators.required]],
      create_time: [null, [Validators.required]]
    });
  }

  submitForm(): void {
    console.log(this.validateForm.value);
  }

}
