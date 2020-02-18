import { Component, OnInit, OnDestroy } from '@angular/core';
import {FormControl} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';

export class Notes  {
  title: String;
  content: String;
  todo: String;
}
 
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit, OnDestroy {
  // alarm;
  // alarmRunning = false;
  name= 'Angular';
  time = new Date();
  timer;

  ngOnInit(): void {
    this.timer = setInterval(() => {
      this.time = new Date();
    }, 1000);
    
    // throw new Error("Method not implemented.");
  }
  ngOnDestroy(): void {
    clearInterval(this.timer);
    // throw new Error("Method not implemented.");
  }
  disableSelect = new FormControl(true);
  titleModel: String;
  contentModel: String;
  todoModel: String;
  Notes: Notes [];
  // quicknotes: Quicknotes[];
 
  constructor() {
    this.titleModel = '';
    this.contentModel = '';
    this.todoModel = '';
 
    const defaultNotes: Notes = {
      title: 'my note',
      content: 'This is default note',
      todo: ' this is the default time you want to your task done'
    };
 
    this.Notes = [];
  }


  createNotes() {
 
    const newNotes:Notes = {
      title: this.titleModel,
      content: this.contentModel,
      todo: this.todoModel
    };
 
    this.Notes.push(newNotes);
 

    this.titleModel = this.todoModel = this.contentModel = '';


  }
 


 
}
  
  

 
