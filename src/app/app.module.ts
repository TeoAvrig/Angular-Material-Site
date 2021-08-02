import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MeniuComponent } from './meniu/meniu.component';
import { CreditComponent } from './credit/credit.component';
import { SearchComponent } from './search/search.component';
import {MatListModule} from "@angular/material/list";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {NoopAnimationsModule} from '@angular/platform-browser/animations'
import {MatInputModule} from "@angular/material/input";
import { CardStatisticComponent } from './card-statistic/card-statistic.component';
import { CardDataComponent } from './card-data/card-data.component';
import {MatCardModule} from "@angular/material/card";
import {MatTableModule} from "@angular/material/table";
import {MatTabsModule} from "@angular/material/tabs";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    MeniuComponent,
    CreditComponent,
    SearchComponent,
    CardStatisticComponent,
    CardDataComponent
  ],
  imports: [
    BrowserModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    NoopAnimationsModule,
    MatTableModule,
    MatTabsModule,
    MatCheckboxModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
