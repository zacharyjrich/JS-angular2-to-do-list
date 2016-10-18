import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'task-list',
  template: `
    <select (change)="onChangeDone($event.target.value)" class="filter">
      <option value="all">Show All</option>
      <option value="isDone">Show Done</option>
      <option value="notDone" selected="selcted">Show Not Done</option>
    </select>
    <select (change)="onChangePriority($event.target.value)" class="filter">
      <option value="all" selected="selcted">All</option>
      <option value="low">Low</option>
      <option value="med">Medium</option>
      <option value="high">High</option>
    </select>
    <div *ngFor="let currentTask of childTaskList | completeness:selectedCompleteness | priorities:selectedPriorities">
      <task-display [task]="currentTask"></task-display>
      <button (click)="editButtonHasBeenClicked(currentTask)">Edit</button>
    </div>
  `
})

export class TaskListComponent {
  @Input() childTaskList: Task[];
  @Output() clickSender = new EventEmitter();
  public selectedPriorities: string = "all";
  onChangePriority(optionPriority) {
    this.selectedPriorities = optionPriority;
  }
  public selectedCompleteness: string = "notDone";
  onChangeDone(optionFromMenu) {
    this.selectedCompleteness = optionFromMenu;
  }
  editButtonHasBeenClicked(taskToEdit: Task) {
    this.clickSender.emit(taskToEdit);
  }
}
