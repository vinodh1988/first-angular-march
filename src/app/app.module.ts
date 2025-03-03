import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent //components, directives, and pipes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule //other modules needed by the app module
  ],
  providers: [
    provideClientHydration() //services defined in the app module
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
