import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact.model';
import { DataService } from '../data.service';
import 'rxjs/Rx';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Contact[] = [];
  queryString = '';

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this._dataService.getContacts()
      .subscribe(
        (contacts: Contact[]) => {
          this.contacts = contacts;
          console.log('Contact list contacts', this.contacts);
        }
      );
  }

}
