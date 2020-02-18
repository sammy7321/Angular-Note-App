import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { NotesreceivableComponent } from './notesreceivable/notesreceivable.component';
import { NotesComponent } from './notes/notes.component';
import { AlarmsreceivableComponent } from './alarmsreceivable/alarmsreceivable.component';
import { HistoryComponent } from './history/history.component';


const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'todo', component:NotesreceivableComponent},
  { path: 'notespage', component:NotesComponent },
  { path:'alarm', component:AlarmsreceivableComponent},
  {path:'history', component:HistoryComponent},
  { path: '*', redirectTo: '' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
