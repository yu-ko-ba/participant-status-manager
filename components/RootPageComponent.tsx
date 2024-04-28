import { Container, Stack } from "@mui/material";
import { Header } from "./Header";
import { EventList } from "./EventList";
import { Event } from "@/types/Event";
import { useState } from "react";
import { FloatingAddButton } from "./FloatingAddButton";
import { AddEventDialog } from "./AddEventDialog";
import { Participant } from "@/types/Participant";
import { Participation } from "@/types/participation";

type Props = {};

export const RootPageComponent = ({ }: Props) => {
  const [events, setEvents] = useState<Event[]>([]);
  const [showAddEventDialogFlag, setShowAddEventDialogFlag] = useState(false);

  return (
    <Container maxWidth="md">
      <Header />

      <Stack spacing={2}>
        <div />
        <EventList
          events={events}
          onParticipationChanged={(
            participation: Participation,
            eventsIndex: number,
            participantsIndex: number,
          ) => {
            setEvents(events.map((event: Event, index: number) => {
              if (index != eventsIndex) {
                return event;
              }

              return {
                ...event,
                participants: event.participants.map(
                  (participant: Participant, index: number) => {
                    if (index != participantsIndex) {
                      return participant;
                    }

                    return {
                      ...participant,
                      status: participation,
                    };
                  },
                ),
              };
            }));
          }}
          onSettleStatusChanged={(
            settled: boolean,
            eventsIndex: number,
            participantsIndex: number,
          ) => {
            setEvents(events.map((event: Event, index: number) => {
              if (index != eventsIndex) {
                return event;
              }

              return {
                ...event,
                participants: event.participants.map(
                  (participant: Participant, index: number) => {
                    if (index != participantsIndex) {
                      return participant;
                    }

                    return {
                      ...participant,
                      isSettled: settled,
                    };
                  },
                ),
              };
            }));
          }}
          onAddParticipantButtonClicked={(
            newParticipantName: string,
            index: number,
          ) => {
            setEvents(events.map((e: Event, i: number) => {
              if (i != index) {
                return e;
              }

              return {
                ...e,
                participants: [
                  ...e.participants,
                  new Participant(newParticipantName),
                ],
              };
            }));
          }}
        />
      </Stack>

      <AddEventDialog
        open={showAddEventDialogFlag}
        onCreateButtonClick={(name, url) => {
          setEvents([
            ...events,
            {
              name: name,
              website: url,
              participants: [],
            },
          ]);
        }}
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
