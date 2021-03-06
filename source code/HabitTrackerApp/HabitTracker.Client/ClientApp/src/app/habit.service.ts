import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Habit } from './model/habit';

@Injectable()
export class HabitService {

  private url = "/api/habit";

  constructor(private httpClient: HttpClient) {
  }

  getHabits() {
    return this.httpClient.get(this.url + "/habits");
  }
  
}
