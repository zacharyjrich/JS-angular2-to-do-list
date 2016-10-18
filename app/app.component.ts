import { Component } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container col-md-offset-4">
    <h1 id="header">To Do List</h1>
    <task-list
      [childTaskList]="masterTaskList"
      (clickSender)="showDetails($event)"
    ></task-list>
    <edit-task
      [childSelectedTask]="selectedTask"
      (doneClickedSender)="finishedEditing()"
    ></edit-task>
    <new-task
      (newTaskSender)="addTask($event)"
    ></new-task>
  </div>
  `
})

export class AppComponent {
  public masterTaskList: Task[] = [
    new Task("Create To-Do List app.", "low", 0),
    new Task("Learn Kung Fu.", "high", 1),
    new Task("Rewatch all the Lord of the Rings movies.", "med", 2),
    new Task("Do the laundry.", "low", 3)
  ];
  selectedTask: Task = null;
  showDetails(clickedTask: Task) {
    this.selectedTask = clickedTask;
  }
  finishedEditing() {
    this.selectedTask = null;
  }
  addTask(newTaskFromChild: Task) {
    this.masterTaskList.push(newTaskFromChild);
  }
}
