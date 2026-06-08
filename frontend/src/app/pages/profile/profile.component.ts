import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Customer } from '../../models';
import { CustomerService } from '../../core/services/customer.service';

@Component({ selector: 'app-profile', templateUrl: './profile.component.html' })
export class ProfileComponent implements OnInit {
  form!: FormGroup;
  loading = true;
  saving = false;
  success = '';

  constructor(private fb: FormBuilder, private customerService: CustomerService) {}

  ngOnInit() {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: [''],
      defaultAddress: this.fb.group({
        firstName: [''], lastName: [''], line1: [''], line2: [''],
        city: [''], state: [''], postcode: [''], country: ['India'], phone: ['']
      })
    });
    this.customerService.getProfile().subscribe(c => {
      this.form.patchValue(c);
      this.loading = false;
    });
  }

  save() {
    if (this.form.invalid) return;
    this.saving = true;
    this.customerService.updateProfile(this.form.value).subscribe({
      next: () => { this.saving = false; this.success = 'Profile updated!'; setTimeout(() => this.success = '', 3000); },
      error: () => this.saving = false
    });
  }
}
