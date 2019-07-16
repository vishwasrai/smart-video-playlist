import { Component, OnInit, APP_INITIALIZER } from '@angular/core';
import { appInitializerFactory } from '@angular/platform-browser/src/browser/server-transition';

@Component({
  selector: 'app-stop-button',
  templateUrl: './stop-button.component.html',
  styleUrls: ['./stop-button.component.scss']
})
export class StopButtonComponent implements OnInit {

  name : string = "vishwas";
  constructor() { }

  ngOnInit() {
  }

  showSummary() {
    console.log("kkkkkkkk");
  }
  
}
