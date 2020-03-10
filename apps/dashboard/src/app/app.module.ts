import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CoreDataModule } from '@ngrx-shoes/core-data';
import { CoreStateModule } from '@ngrx-shoes/core-state';
import { MaterialModule } from '@ngrx-shoes/material';
import { UiLoginModule } from '@ngrx-shoes/ui-login';

import { RoutingModule } from './routing.module';
import { AppComponent } from './app.component';
import { ShoesComponent } from './shoes/shoes.component';
import { ShoesListComponent } from './shoes/shoes-list/shoes-list.component';
import { ShoesDetailsComponent } from './shoes/shoes-details/shoes-details.component';
import { ShoesItemComponent } from './shoes/shoes-item/shoes-item.component';
import { WildComponent } from './wild/wild.component';
import { LoginComponent } from '@ngrx-shoes/ui-login';

@NgModule({
  declarations: [
    AppComponent,
    ShoesComponent,
    ShoesListComponent,
    ShoesDetailsComponent,
    ShoesItemComponent,
    WildComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CoreDataModule,
    CoreStateModule,
    MaterialModule,
    UiLoginModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
