import {JsonpModule, Response,  ResponseOptions,   HttpModule,    XHRBackend} from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { TestBed, inject } from '@angular/core/testing';

import { DataService } from './data.service';

describe('DataService', () => {

  const contact = {
    name: 'Oleta Level',
    phone_number: '+442032960159',
    address: '10 London Wall, London EC2M 6SA, UK'
  };

  const data = {
      contacts: [
        contact
      ]
  };


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [JsonpModule],
      providers: [
        DataService,
        { provide: XHRBackend, useClass: MockBackend },
      ]
    });
  });

  it('should be created', inject([DataService], (service: DataService) => {
    expect(service).toBeTruthy();
  }));

  describe('getContacts', () => {
    it('should return an Observable array of contacts',
    inject([DataService, XHRBackend], (dataService, mockBackend) => {

    mockBackend.connections.subscribe((connection) => {
      connection.mockRespond(new Response(new ResponseOptions({
        body: JSON.stringify(data)
      })));
    });

    dataService.getContacts().subscribe((response) => {
      expect(response.length).toBe(1);
      expect(response[0]).toEqual(contact);
    });

  }));
  });
});
