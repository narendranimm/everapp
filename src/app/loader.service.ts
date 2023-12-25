import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private loadingSubject = new BehaviorSubject<boolean>(false);

  startLoading() {
    this.loadingSubject.next(true);
  }

  stopLoading() {
    this.loadingSubject.next(false);
  }

  getLoadingState() {
    return this.loadingSubject.asObservable();
  }
}