import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-alarmsreceivable',
  templateUrl: './alarmsreceivable.component.html',
  styleUrls: ['./alarmsreceivable.component.scss']
})
export class AlarmsreceivableComponent implements OnInit {
  constructor(private router: Router) { }
  



  ngOnInit() {
  }

  onClick2() :void {
    this.router.navigate(["/notes"]);

  }

  gohome2():void{
    this.router.navigate(["/"])
  }
}

 