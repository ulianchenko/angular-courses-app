import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  isDisplay: boolean = false;
  private loadingChange: Subject<boolean> = new Subject<boolean>();

  getLoadingChange(): Observable<boolean> {
    return this.loadingChange.asObservable();
  }

  setLoadingChange(loadingStatus: boolean) {
    this.isDisplay = loadingStatus;
    this.loadingChange.next(loadingStatus);
  }
}
