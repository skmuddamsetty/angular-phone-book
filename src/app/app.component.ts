import { Component, VERSION } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ContactFormComponent } from "./contact-form/contact-form.component";

interface Contact {
  firstName: string;
  lastName: string;
}

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(public dialog: MatDialog) {}
  contacts: Contact[] = [
    {
      firstName: "John",
      lastName: "Doe"
    },
    {
      firstName: "Jane",
      lastName: "Doe"
    }
  ];

  openDialog() {
    const dialogRef = this.dialog.open(ContactFormComponent);

    dialogRef.afterClosed().subscribe((result: Contact) => {
      this.contacts.push(result);
      console.log(`Dialog result: ${JSON.stringify(result, null, 2)}`);
    });
  }
}
