import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-notesreceivable',
  templateUrl: './notesreceivable.component.html',
  styleUrls: ['./notesreceivable.component.scss']
})
export class NotesreceivableComponent implements OnInit {
  constructor(private router: Router) { }

  // constructor() { }

  ngOnInit() {
    
  }

  // onClick() :void {
  //   this.router.navigate(["/notes"]);

  // }
  gohome():void{
    this.router.navigate(["/"])
  }

 
   

}
