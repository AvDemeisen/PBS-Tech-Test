import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { LandingPageComponent, FormPageComponent } from './pages';
import { HeaderComponent, ButtonComponent, FormComponent } from './components';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    FormPageComponent,
    HeaderComponent,
    ButtonComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
