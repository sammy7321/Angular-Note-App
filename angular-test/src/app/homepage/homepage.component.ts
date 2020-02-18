import { Component } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { NotesreceivableComponent } from '../notesreceivable/notesreceivable.component';
import { NotesComponent } from '../notes/notes.component';
import { HistoryComponent } from '../history/history.component';
import { AlarmsreceivableComponent } from '../alarmsreceivable/alarmsreceivable.component';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent  {
  constructor(private router: Router) { }
  tiles: TilesType[] = [
    { title: 'Todo', pageLink: 'todo', count: 0,},
    { title: 'Alarm', pageLink: 'alarm', count: 0 },
    { title: 'History', pageLink: 'history', count: 0 }
  ];
  title = 'A note taking app';

  

  ngOnInit() {
 
   }
   onClickCount() :void {
    this.router.navigate(["/notespage"]);

  }

}

interface TilesType {
  title: string;
  pageLink: String;
  count: number;
}