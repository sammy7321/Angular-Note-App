import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onClick3() :void {
    this.router.navigate(["/notes"]);

  }
  onClick4() :void {
    this.router.navigate(["/notes"]);

  }

  gohome3():void{
    this.router.navigate(["/"])
  }
}


  
