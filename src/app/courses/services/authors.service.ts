import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Author } from '../models/author.model';
import { urls } from '../../core/environment';
import { catchError } from 'rxjs';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { LoadingService } from '../../core/services/loading.service';
import { setError } from '../../store/auth/auth.actions';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {
  constructor(
    // eslint-disable-next-line no-unused-vars
    private http: HttpClient,
    // eslint-disable-next-line no-unused-vars
    private store: Store,
    // eslint-disable-next-line no-unused-vars
    private router: Router,
    // eslint-disable-next-line no-unused-vars
    private loadingService: LoadingService
  ) {}

  fetchAuthors() {
    return this.http.get<Author[]>(`${urls.base}/authors`).pipe(
      catchError((error) => {
        this.router.navigate(['/error']);
        this.store.dispatch(setError({ errorStr: error.message }));
        this.loadingService.setLoadingChange(false);
        return [];
      })
    );
  }
}
