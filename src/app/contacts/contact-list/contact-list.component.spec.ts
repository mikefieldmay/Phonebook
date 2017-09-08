import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactListComponent } from './contact-list.component';
import { Observable } from 'rxjs/Rx';
import { Contact } from '../contact.model';
import { DataService } from '../data.service';

const contact = new Contact(
  'Oleta Level',
  '+442032960159',
  '10 London Wall, London EC2M 6SA, UK'
);

class DataServiceStub {
  getContacts() {
    return Observable.from([[contact]]);
  }
}

describe('ContactListComponent', () => {
  let component: ContactListComponent;
  let fixture: ComponentFixture<ContactListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactListComponent ],
      providers: [ { provide: DataService, useClass: DataServiceStub } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should hold an array of comics', () => {
    expect(component.contacts).toEqual([contact]);
  });

  it('should display phonebook information', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.contact-info')).toBeTruthy();
  });

  describe('onInit', () => {

    it('should subscribe to the DataService', () => {
      let ds = new DataService(null);
      let contactList = new ContactListComponent(ds);
      spyOn(ds, 'getContacts').and.callFake(() => {
        return Observable.from([contact]); });
      contactList.ngOnInit();
      expect(ds.getContacts).toHaveBeenCalled();
    });
  });
});
