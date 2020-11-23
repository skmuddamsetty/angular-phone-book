import { Component, OnInit } from "@angular/core";
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validators
} from "@angular/forms";

export interface Email {
  typeOfEmail: string;
  email: string;
}

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
      emails: this.fb.array([]),
      phones: this.fb.array([]),
      urls: this.fb.array([])
    });
  }

  ngOnInit() {}

  get emails(): FormArray {
    return this.contactForm.get("emails") as FormArray;
  }

  get phones(): FormArray {
    return this.contactForm.get("phones") as FormArray;
  }

  get urls(): FormArray {
    return this.contactForm.get("urls") as FormArray;
  }

  get firstName() {
    return this.contactForm.get("firstName");
  }

  get lastName() {
    return this.contactForm.get("lastName");
  }

  newEmail(): FormGroup {
    return this.fb.group({
      typeOfEmail: [""],
      email: ["", [Validators.required, Validators.email]]
    });
  }

  newPhone(): FormGroup {
    return this.fb.group({
      phone: ["", [Validators.required, Validators.pattern(/^[0-9]\d*$/)]]
    });
  }

  newUrl(): FormGroup {
    return this.fb.group({
      url: [
        "",
        [
          Validators.required,
          Validators.pattern(
            /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/
          )
        ]
      ]
    });
  }

  addEmail() {
    this.emails.push(this.newEmail());
  }

  addPhone() {
    this.phones.push(this.newPhone());
  }

  addUrl() {
    this.urls.push(this.newUrl());
  }

  removeEmail(i: number) {
    this.emails.removeAt(i);
  }

  removePhone(i: number) {
    this.phones.removeAt(i);
  }

  removeUrl(i: number) {
    this.urls.removeAt(i);
  }

  displayDeleteEmailButton(i: number) {}

  getControl(i, formGroup, formControl) {
    return (<FormArray>this.contactForm.get(formGroup)).controls[i].get(
      formControl
    );
  }
}
