import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-donate',
  standalone: true, // Use standalone component
  imports: [ReactiveFormsModule, CommonModule], // Import necessary modules here
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.scss']
})
export class DonateComponent implements OnInit {
  donateForm!: FormGroup;
  donationOptions = ['Education', 'Health', 'Environment', 'Community Support'];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.donateForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      transactionVia: ['', Validators.required],
      cardNumber: ['', [Validators.required, Validators.pattern(/^\d{16}$/)]],
      donationPurpose: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.donateForm.valid) {
      console.log('Form Submitted', this.donateForm.value);
    }
  }
}
