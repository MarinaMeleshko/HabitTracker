import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Habit } from './model/habit';

import { of, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class HabitService {

  private url = "/api/habit";

  constructor(private httpClient: HttpClient) {
  }

  getHabits() {
    return this.httpClient.get(this.url + "/habits");
  }

  updateHabits(habits: Habit[]): Observable<Habit[]> {
    return this.httpClient.post<Habit[]>(this.url + "/updatehabits", habits)
      .pipe(
        catchError(() => of(habits))
      );
  }
}
