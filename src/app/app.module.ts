import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DocketFormComponent } from './docket-form/docket-form.component';
import { DocketListComponent } from './docket-list/docket-list.component';


import { FormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';



// import { WorklogComponent } from './worklog/worklog.component';


const appRoutes: Routes = [

  { path: '', redirectTo: '/docket-form',pathMatch :'full'},
  { path: 'docket-form', component: DocketFormComponent },
  { path: 'docket-list', component: DocketListComponent },
  
];

@NgModule({
  declarations: [
    AppComponent,
    DocketFormComponent,
    DocketListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    MatCardModule,
    FormsModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
