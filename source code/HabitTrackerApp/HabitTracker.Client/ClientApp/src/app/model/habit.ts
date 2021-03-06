export class Habit {
  constructor(public id: number,
    public title: string,
    public progress: boolean[],
    public duration: number,
    public creationDate: Date) {
  }
}
