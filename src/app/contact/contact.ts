import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { environment } from '../../environments/environment';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact implements OnInit {

  feedbackForm!: FormGroup;

  submitting = false;
  submitSuccess = false;
  submitError: string | null = null;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) {}

  ngOnInit(): void {

    this.feedbackForm = this.fb.group({

      firstname: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(25)
        ]
      ],

      lastname: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(25)
        ]
      ],

      email: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ],

      telnum: [
        '',
        [
          Validators.pattern(/^[0-9+\-\s()]+$/)
        ]
      ],

      contactType: [
        'Email',
        Validators.required
      ],

      message: [
        '',
        Validators.required
      ],

      agree: [
        false
      ]

    });

  }


  get firstname() {
    return this.feedbackForm.get('firstname');
  }

  get lastname() {
    return this.feedbackForm.get('lastname');
  }

  get email() {
    return this.feedbackForm.get('email');
  }

  get telnum() {
    return this.feedbackForm.get('telnum');
  }

  get message() {
    return this.feedbackForm.get('message');
  }


  onSubmit(): void {

    if (this.feedbackForm.invalid) {

      this.feedbackForm.markAllAsTouched();

      return;
    }


    this.submitting = true;
    this.submitSuccess = false;
    this.submitError = null;


    const formData = this.feedbackForm.value;


    this.http.post(
      `${environment.apiUrl}/contact`,
      formData
    ).subscribe({

      next: () => {

        this.submitting = false;
        this.submitSuccess = true;

        this.feedbackForm.reset({
          firstname: '',
          lastname: '',
          email: '',
          telnum: '',
          contactType: 'Email',
          message: '',
          agree: false
        });

      },


      error: (error) => {

        console.error(
          'Contact form error:',
          error
        );

        this.submitting = false;
        this.submitSuccess = false;

        this.submitError =
          error?.error?.message ||
          'Unable to send your message. Please try again.';

      }

    });

  }

}

