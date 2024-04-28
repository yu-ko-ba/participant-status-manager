import { Event as EventType } from "@/types/Event";
import { Stack } from "@mui/material";
import { Event } from "./Event";

type Props = {
  events: EventType[];
  onAddParticipantButtonClicked: (
    newParticipantName: string,
    index: number,
  ) => void;
};

export const EventList = ({ events, onAddParticipantButtonClicked }: Props) => (
  <Stack spacing={2}>
    {events
      ? events.map((e: EventType, index: number) => (
        <Event
          event={e}
          key={index}
          onAddParticipantButtonClicked={(name) => {
            onAddParticipantButtonClicked(name, index);
          }}
        />
      ))
      : ""}
  </Stack>
);
