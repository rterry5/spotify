import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

  @Input()
  searchQuery: string;

  @Input()
  playlists: any;

  @Input()
  weather: any;

  constructor() { }

  ngOnInit() {
  }

}
