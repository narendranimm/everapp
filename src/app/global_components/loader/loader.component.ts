import { Component, Input, OnInit } from '@angular/core';
import { IonLoaderService } from 'services/Ionic_Loader/ionic_Loader.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css'],
})
export class LoaderComponent   {
  //sample code remote later

  constructor(private ionLoaderService: LoadingService) { 
  }
  displayAutoLoader() {
    this.ionLoaderService.autoLoader();
  }
  showLoader() {
    this.ionLoaderService.simpleLoader('Loading');
  }
  hideLoader() {
    this.ionLoaderService.dismissLoader();
  }
  customizeLoader() {
    this.ionLoaderService.customLoader();
  }
}


