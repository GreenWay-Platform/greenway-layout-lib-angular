import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExampleLayoutComponent } from './pages/example-layout/example-layout.component';
import { GreenwayLayoutCoreModule } from 'projects/greenway/layout-core/src/public-api';

@NgModule({
  declarations: [
    AppComponent,
    ExampleLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    GreenwayLayoutCoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
