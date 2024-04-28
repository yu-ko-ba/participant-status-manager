import { Participation } from "./participation";

export class Participant {
  name: string;
  status: Participation;
  isSettled: boolean;

  constructor(name: string) {
    this.name = name;
    this.status = Participation.will;
    this.isSettled = false;
  }
}
