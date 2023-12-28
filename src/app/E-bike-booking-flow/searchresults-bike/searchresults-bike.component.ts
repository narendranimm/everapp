import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchresults-bike',
  templateUrl: './searchresults-bike.component.html',
  styleUrls: ['./searchresults-bike.component.scss'],
})
export class SearchresultsBikeComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}
  searchText = '';
  characters = [
    'Ant-Man',
    'Aquaman',
    'Asterix',
    'The Atom',
    'The Avengers',
    'Batgirl',
    'Batman',
    'Batwoman',
    
  ]
}
