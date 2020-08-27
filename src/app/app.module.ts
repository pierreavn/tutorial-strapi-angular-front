import { BrowserModule } from '@angular/platform-browser';
import { NgModule, SecurityContext } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobsService } from 'src/services/jobs.service';

import { MarkdownModule } from 'ngx-markdown';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { JobComponent } from './job/job.component';

@NgModule({
  declarations: [
    AppComponent,
    JobComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    HttpClientModule,
    CommonModule,
    FormsModule,
    MarkdownModule.forRoot({ sanitize: SecurityContext.NONE }), // Disable sanitization
  ],
  providers: [
    JobsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
