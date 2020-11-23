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
      emails: this.fb.array([])
    });
  }

  ngOnInit() {}

  get emails(): FormArray {
    return this.contactForm.get("emails") as FormArray;
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

  addEmail() {
    this.emails.push(this.newEmail());
  }

  removeEmail(i: number) {
    this.emails.removeAt(i);
  }

  displayDeleteEmailButton(i: number) {}

  getControl(i, formGroup, formControl) {
    return (<FormArray>this.contactForm.get(formGroup)).controls[i].get(
      formControl
    );
  }
}
