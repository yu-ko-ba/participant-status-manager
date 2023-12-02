import { Dispatch, SetStateAction, useState } from "react";
import { Participation } from "./participation";

export class Participant {
  name: string;
  status: Participation;
  setStatus: Dispatch<SetStateAction<Participation>>;
  isSettled: boolean;
  setIsSettled: Dispatch<SetStateAction<boolean>>;

  constructor(name: string) {
    this.name = name;
    [this.status, this.setStatus] = useState<Participation>(Participation.will);
    [this.isSettled, this.setIsSettled] = useState<boolean>(false);
  }
}
