import { Component, inject  } from '@angular/core';
import { FloatLabelModule } from "primeng/floatlabel"
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MessageModule, Message } from 'primeng/message';
import { MessageService } from 'primeng/api';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-component',
  imports: [FloatLabelModule, InputTextModule, ReactiveFormsModule, ButtonModule, ToastModule, Message],
  templateUrl: './contact-component.html',
  providers: [MessageService],
  styleUrl: './contact-component.scss'
})
export class ContactComponent {

    messageService = inject(MessageService);

    contactForm: FormGroup;

    formSubmitted = false;

     loading: boolean = false;

    load() {
        this.loading = true;

        setTimeout(() => {
            this.loading = false
        }, 2000);
    }
    
    constructor(private fb: FormBuilder) {
        this.contactForm = this.fb.group({
            name: ['', Validators.required],
            surname: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            phoneNumber: ['', [Validators.required]],
            message: ['', [Validators.required]]
        });
    }

    onSubmit() {
        this.formSubmitted = true;
        if (this.contactForm.valid) {
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Form Submitted', life: 3000 });
            this.contactForm.reset();
            this.formSubmitted = false;
        }
    }

    isInvalid(controlName: string) {
        const control = this.contactForm.get(controlName);
        return control?.invalid && (control.touched || this.formSubmitted);
    }



}
