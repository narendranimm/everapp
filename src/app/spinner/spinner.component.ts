import { Component, Input, OnInit } from '@angular/core';
import { LoaderService } from '../loader.service';

@Component({
  selector: 'app-spinner',
  template: '<div *ngIf="isLoading" class="loading-spinner">Loading...</div>',
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent  implements OnInit {
  @Input() isLoading: boolean=false;
  constructor(public loader: LoaderService) {
   }

  ngOnInit() {}

}
