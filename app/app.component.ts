import { Component } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>My First Angular 2 App</h1>
    <task-list></task-list>
    <div *ngIf="selectedTask">
      <h1>Edit Task</h1>
      <div>
        <label> Enter Task Description:</label>
        <input [(ngModel)]="selectedTask.description">
      </div>
      <div>
        <label> Enter Task ID:</label>
        <input [(ngModel)]="selectedTask.id">
        <button (click)="finishedEditing()">Done</button>
      </div>
    </div>
  </div>
  `
})

export class AppComponent {
  selectedTask: Task = null;
  showDetails(clickedTask: Task) {
    this.selectedTask = clickedTask;
  }
  finishedEditing() {
    this.selectedTask = null;
  }
}
