import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { findTxtType } from './findTextType.pipe';
import { FormsModule } from '@angular/forms';
import { getFileDetails } from './getfiledetails.pipe';

@NgModule({
  declarations: [
    AppComponent,
    findTxtType,
    getFileDetails,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
