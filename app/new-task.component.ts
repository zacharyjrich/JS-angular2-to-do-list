import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'new-task',
  template: `
  <h1>New Task</h1>
  <div>
    <label>Enter Task Description:</label>
    <input #newDescription>
  </div>
  <div>
    <label>Enter Task Priority:</label>
    <select #newPriority>
      <option value="low" selected="selected">Low</option>
      <option value="med">Med</option>
      <option value="high">High</option>
    </select>
  </div>
  <div>
    <label>Enter Task ID:</label>
    <input #newId>
    <button (click)="
    addClicked(newDescription.value, newPriority.value, newId.value);
    newDescription.value='';
    newId.value='';
    ">Add</button>
  </div>
  `
})

export class NewTaskComponent {
  @Output() newTaskSender = new EventEmitter();
  addClicked(description: string, priority: string, id: number) {
    var newTaskToAdd: Task = new Task(description, priority, id);
    this.newTaskSender.emit(newTaskToAdd);
  }
}
