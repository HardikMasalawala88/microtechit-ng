// import { MatIconModule } from '@angular/material/icon';
import { ThemeServiceService } from './theme-service.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { CollapseModule } from 'ngx-bootstrap/collapse';
// import { TooltipModule } from 'ngx-bootstrap/tooltip';
// import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { CounterSectionComponent } from './components/counter-section/counter-section.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { FooterComponent } from './components/footer/footer.component';
import { AdminComponent } from './components/admin/admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ServicesComponent,
    AboutUsComponent,
    CounterSectionComponent,
    ContactUsComponent,
    FooterComponent,
    AdminComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    // CollapseModule.forRoot(),
    // TooltipModule.forRoot(),
    // ProgressbarModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    // MatIconModule,
  ],
  providers: [
    ThemeServiceService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
