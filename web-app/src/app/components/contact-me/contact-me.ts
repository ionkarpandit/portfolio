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

  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) {
    this.contactForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  /** Easy access for template */
  get f() {
    return this.contactForm.controls;
  }

  /** Close modal */
  closeModal(): void {
    this.close.emit();
  }

  /** Submit form */
  sendMessage(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    this.submitError = '';
    this.submitSuccess = false;

    const payload = {
      ...this.contactForm.value,
      timestamp: new Date().toISOString(),
    };

    // 🔁 Replace with your real backend / email API
    this.http.post('https://your-api-endpoint/contact', payload).subscribe({
      next: () => {
        this.isSubmitting = false;
        this.submitSuccess = true;
        this.contactForm.reset();

        // Optional: auto close after success
        setTimeout(() => this.closeModal(), 1200);
      },
      error: () => {
        this.isSubmitting = false;
        this.submitError = 'Something went wrong. Please try again later.';
      }
    });
  }
  
}
