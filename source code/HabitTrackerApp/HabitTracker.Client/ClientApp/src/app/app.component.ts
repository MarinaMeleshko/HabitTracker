import { Component } from '@angular/core';
import { HabitService } from './habit.service';
import { Habit } from "./model/habit";
import { getDifferenceInSeconds } from "./date.helper";

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
    this.lastSaveTime = new Date();
    this.lastChangeTime = new Date();
  }

  ngOnInit() {
    this.loadHabits();
  }

  ngDoCheck() {
    const now = new Date();

    if (this.isSaveIntervalExceeded(now) && this.isChangesIntervalExceeded(now)) {
      this.saveChanges();
    }

    this.lastChangeTime = now;
  }

  loadHabits() {
    this.habitService.getHabits()
      .subscribe((habits: Habit[]) => this.habits = habits);
  }

  saveChanges() {
    this.isUpdateInProgress = true;

    this.habits.forEach(this.fillEmptyProgressWithFalse);

    this.habitService.updateHabits(this.habits)
      .subscribe(() => {
        this.completeSavingChanges();
      });
  }

  completeSavingChanges() {
    setTimeout(() => {
      this.isUpdateInProgress = false;
    }, 500);

    this.lastSaveTime = new Date();
  }

  isSaveIntervalExceeded(now: Date): boolean {
    const difference = getDifferenceInSeconds(now, this.lastSaveTime);
    
    return difference > AppComponent.SAVE_TIME_INTERVAL;
  }

  isChangesIntervalExceeded(now: Date): boolean {
    const difference = getDifferenceInSeconds(now, this.lastChangeTime);

    return difference > AppComponent.SAVE_CHANGES_INTERVAL;
  }

  fillEmptyProgressWithFalse(habit: Habit) {
    const progress = habit.progress;

    for (let index = 0; index < progress.length; ++index) {
      progress[index] = (progress[index] || false);
    }
  }
}
