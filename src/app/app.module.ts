import { JsonpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { DataService } from './contacts/data.service';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';
import { FilterPipe } from './common/filter.pipe';
import { SortPipe } from './common/sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    FilterPipe,
    SortPipe
  ],
  imports: [
    BrowserModule,
    JsonpModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
