import { Dispatch, SetStateAction, useState } from "react";
import { Participation } from "./participation";

export class Participant {
  name: String;
  status: Participation;
  setStatus: Dispatch<SetStateAction<Participation>>;

  constructor(name: String) {
    this.name = name;
    [this.status, this.setStatus] = useState<Participation>(Participation.will);
  }
}
