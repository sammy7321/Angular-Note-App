import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  sidebarItems: SideBar[] = [
    { id: 'todo', pageLink: 'todo', pageTitle: 'Todo', icon: 'fas fa-bell' },
    { id: 'alarm', pageLink: 'alarm', pageTitle: 'Alarm', icon: 'fas fa-clock' },
    { id: 'history', pageLink: 'history', pageTitle: 'History', icon: 'fas fa-history' },
  ];

  constructor(
    ) { }

  expandSidebar = true;
  showOverlay = false;
  selectedItemIndex = '';
  selectedSubItemIndex = '';
  subMenuExpand = '';
  router: any;

  ngOnInit() { }



  }


export interface SideBar {
  id: string;
  parentId?: string;
  pageLink: string;
  pageTitle: string;
  icon: string;
}