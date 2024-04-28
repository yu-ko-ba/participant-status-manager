import { Event as EventType } from "@/types/Event";
import { Stack } from "@mui/material";
import { Event } from "./Event";
import { Participation } from "@/types/participation";

type Props = {
  events: EventType[];
  onParticipationChanged: (
    participation: Participation,
    eventsIndex: number,
    participantsIndex: number,
  ) => void;
  onSettleStatusChanged: (
    settled: boolean,
    eventsIndex: number,
    participantsIndex: number,
  ) => void;
  onAddParticipantButtonClicked: (
    newParticipantName: string,
    index: number,
  ) => void;
};

export const EventList = (
  {
    events,
    onParticipationChanged,
    onSettleStatusChanged,
    onAddParticipantButtonClicked,
  }: Props,
) => (
  <Stack spacing={2}>
    {events
      ? events.map((e: EventType, index: number) => (
        <Event
          event={e}
          key={index}
          onParticipationChanged={(
            participation: Participation,
            participantsIndex: number,
          ) => {
            onParticipationChanged(participation, index, participantsIndex);
          }}
          onSettleStatusChanged={(
            settled: boolean,
            participantsIndex: number,
          ) => {
            onSettleStatusChanged(settled, index, participantsIndex);
          }}
          onAddParticipantButtonClicked={(name) => {
            onAddParticipantButtonClicked(name, index);
          }}
        />
      ))
      : ""}
  </Stack>
);
