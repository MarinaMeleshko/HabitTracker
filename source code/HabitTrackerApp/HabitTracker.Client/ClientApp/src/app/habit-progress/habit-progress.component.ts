import { Component, Input } from '@angular/core';
import { Habit } from "../model/habit";

@Component({
    selector: 'app-habit-progress',
    templateUrl: './habit-progress.component.html',
    styleUrls: ['./habit-progress.component.css']
})

export class HabitProgressComponent {

  @Input() habit: Habit;
  progress: boolean[];

  constructor() {

  }

  ngOnInit() {
    this.initProgress();
  }

  initProgress() {
    this.progress = new Array<boolean>(this.habit.duration);

    for (let index in this.habit.progress) {
      this.progress[index] = this.habit.progress[index];
    }
  }

  completeProgressItem(data: [boolean, number]) {
    let isCompleted: boolean, index: number;
    [isCompleted, index] = data;
    
    this.habit.progress[index] = isCompleted;
  }
}
