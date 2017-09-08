import { Jsonp, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Contact } from './contact.model';
import 'rxjs/Rx';

@Injectable()
export class DataService {
  apiAddress = 'http://www.mocky.io/v2/581335f71000004204abaf83?callback=JSONP_CALLBACK';

  constructor(private _jsonp: Jsonp) { }

  getContacts(): Observable<Contact[]> {
    console.log('getcontacts being called');
    return this._jsonp.get(this.apiAddress)
      .map(
        (response: Response) => {
          let contacts = response.json();
          return contacts.contacts;
      });
  }
}
