export class Task {
  public done: boolean = false;
  public priority: string = "High";
  constructor(public description: string, public id: number) { }
}
