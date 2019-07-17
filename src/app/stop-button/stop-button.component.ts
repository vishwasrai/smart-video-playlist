import { Component, OnInit, APP_INITIALIZER, Input } from '@angular/core';
import { appInitializerFactory } from '@angular/platform-browser/src/browser/server-transition';
import { IMedia } from '../app.component';

@Component({
  selector: 'app-stop-button',
  templateUrl: './stop-button.component.html',
  styleUrls: ['./stop-button.component.scss']
})
export class StopButtonComponent implements OnInit {

  @Input('playItem') playItem : IMedia;
  constructor() { }

  ngOnInit() {
  }

  showSummary() {
    console.log(this.playItem.src);
  }
  
}
