import { Participant } from "./Participant";

export type Event = {
  name: string;
  website: string;
  participants: Participant[];
};
