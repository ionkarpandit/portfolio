import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { SocialMediaIcons } from '../social-media-icons/social-media-icons';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, SocialMediaIcons],
  templateUrl: './contact-me.html',
  styleUrl: './contact-me.css'
})
export class ContactMe {

  @Output() close = new EventEmitter<void>();

  contactForm: FormGroup;
  isSubmitting = false;
  submitSuccess = false;
  submitError = '';

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  get f() {
    return this.contactForm.controls;
  }

  closeModal() {
    this.close.emit();
  }

  sendMessage() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    this.submitError = '';
    this.submitSuccess = false;

    const payload = this.contactForm.value;

    // TEMP mock (replace later with real API)
    setTimeout(() => {
      this.isSubmitting = false;
      this.submitSuccess = true;
      this.contactForm.reset();

      setTimeout(() => this.closeModal(), 1200);
    }, 1200);
  }
}
