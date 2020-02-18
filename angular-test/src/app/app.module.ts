import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

import {MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatCardModule} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import {MatSelectModule} from '@angular/material/select';
import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomepageComponent } from './homepage/homepage.component';
import { NotesComponent } from './notes/notes.component';
import { NotesreceivableComponent } from './notesreceivable/notesreceivable.component';
import { FormsModule } from '@angular/forms';
import { AlarmsreceivableComponent } from './alarmsreceivable/alarmsreceivable.component';
import { HistoryComponent } from './history/history.component';


@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    HomepageComponent,
    NotesComponent,
    NotesreceivableComponent,
    AlarmsreceivableComponent,
    HistoryComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
