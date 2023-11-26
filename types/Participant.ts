import { Dispatch, SetStateAction, useState } from "react";
import { Participation } from "./participation";

export class Participant {
  name: string;
  status: Participation;
  setStatus: Dispatch<SetStateAction<Participation>>;

  constructor(name: string) {
    this.name = name;
    [this.status, this.setStatus] = useState<Participation>(Participation.will);
  }
}
