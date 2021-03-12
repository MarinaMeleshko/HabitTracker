import { Component } from '@angular/core';
import { HabitService } from './habit.service';
import { Habit } from "./model/habit";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [HabitService]
})

export class AppComponent {
  static readonly SAVE_TIME_INTERVAL = 10;
  static readonly SAVE_CHANGES_INTERVAL = 10;

  lastSaveTime: Date;
  lastChangeTime: Date;

  habits: Habit[];
  isUpdateInProgress: boolean = false;

  constructor(private habitService: HabitService) {

  }

  ngOnInit() {
    this.loadHabits();
  }

  loadHabits() {
    this.habitService.getHabits()
      .subscribe((habits: Habit[]) => this.habits = habits);
  }

  saveChanges() {
    this.isUpdateInProgress = true;

    this.habitService.updateHabits(this.habits)
      .subscribe(() => this.isUpdateInProgress = false);

    this.lastSaveTime = new Date();
  }
}
