import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FileuploadComponent } from './fileupload/fileupload.component';
import { MaterialAPIs } from './materialExports';

@NgModule({
  declarations: [
    AppComponent,
    FileuploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialAPIs
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
