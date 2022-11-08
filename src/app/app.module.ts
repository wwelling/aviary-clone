import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AxiomElementsModule } from 'axiom-elements';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'axiom' }),
    AppRoutingModule,
    AxiomElementsModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule { }
