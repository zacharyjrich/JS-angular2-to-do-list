import {Pipe, PipeTransform} from '@angular/core';
import {Task} from './task.model';

@Pipe({
  name: "priorities",
  pure: false
})
export class PrioritiesPipe implements PipeTransform {
  transform(input: Task[], desiredPriorities){
    var output: Task[] = [];
    if (desiredPriorities === "high") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].priority === "high") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredPriorities === "med") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].priority === "med") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredPriorities === "low") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].priority === "low") {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
