import { Component } from '@angular/core';
import { HabitService } from './habit.service';
import { Habit } from "./model/habit";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [HabitService]
})

export class AppComponent {
  habits: Habit[];

  constructor(private habitService: HabitService) {

  }

  ngOnInit() {
    this.loadHabits();
  }

  loadHabits() {
    this.habitService.getHabits()
      .subscribe((habits: Habit[]) => this.habits = habits);
  }
}
