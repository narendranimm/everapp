import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  searchTerm:any
  constructor() { }
emps=[
  {"name":"Praveen"},
  {"name":"Priya"},
  {"name":"subash"}
];
  ngOnInit() {
  }

}
