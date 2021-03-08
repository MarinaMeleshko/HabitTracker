import { Component, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';

@Component({
    selector: 'app-progress-item',
    templateUrl: './progress-item.component.html',
    styleUrls: ['./progress-item.component.css']
})

export class ProgressItemComponent {
  @Input() index: number;
  @Input() isCompleted: boolean;
  @Output() isCompletedEvent = new EventEmitter<[boolean, number]>();

  constructor() {

  }

  changeProgress() {
    this.isCompleted = !this.isCompleted;

    this.isCompletedEvent.emit([this.isCompleted, this.index]);
  }
}
