import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators
} from "@angular/forms";

@Component({
  selector: "app-contact-form",
  templateUrl: "./contact-form.component.html",
  styleUrls: ["./contact-form.component.css"]
})
export class ContactFormComponent implements OnInit {
  contactForm;
  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      firstName: ["", Validators.required],
      lastName: [""],
      company: [""],
      notes: [""],
      email: ["", [Validators.required, Validators.email]]
    });
  }

  ngOnInit() {}

  get email() {
    return this.contactForm.get("email");
  }

  get firstName() {
    return this.contactForm.get("firstName");
  }

  get lastName() {
    return this.contactForm.get("lastName");
  }
}
