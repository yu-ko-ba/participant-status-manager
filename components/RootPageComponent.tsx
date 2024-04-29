import { Container, Stack } from "@mui/material";
import { Header } from "./Header";
import { EventList } from "./EventList";
import { Event } from "@/types/Event";
import { useState } from "react";
import { FloatingAddButton } from "./FloatingAddButton";
import { AddEventDialog } from "./AddEventDialog";
import { Participation } from "@/types/participation";

type Props = {
  events: Event[];

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

  onCreateEventButtonClicked(eventName: string, eventWebsite: string): void;
};

export const RootPageComponent = (
  {
    events,
    onParticipationChanged,
    onSettleStatusChanged,
    onAddParticipantButtonClicked,
    onCreateEventButtonClicked,
  }: Props,
) => {
  const [showAddEventDialogFlag, setShowAddEventDialogFlag] = useState(false);

  return (
    <Container maxWidth="md">
      <Header />

      <Stack spacing={2}>
        <div />
        <EventList
          events={events}
          onParticipationChanged={onParticipationChanged}
          onSettleStatusChanged={onSettleStatusChanged}
          onAddParticipantButtonClicked={onAddParticipantButtonClicked}
        />
      </Stack>

      <AddEventDialog
        open={showAddEventDialogFlag}
        onCreateButtonClick={onCreateEventButtonClicked}
        onClose={() => {
          setShowAddEventDialogFlag(false);
        }}
      />

      <FloatingAddButton
        onClick={() => {
          setShowAddEventDialogFlag(true);
        }}
      />
    </Container>
  );
};
