import { Container, Stack } from "@mui/material";
import { Header } from "./Header";
import { EventList } from "./EventList";
import { Event } from "@/types/Event";
import { useState } from "react";
import { FloatingAddButton } from "./FloatingAddButton";
import { AddEventDialog } from "./AddEventDialog";

type Props = {};

export const RootPageComponent = ({ }: Props) => {
  const [events, setEvents] = useState<Event[]>([]);
  const [showAddDialogFlag, setShowAddDialogFlag] = useState(false);

  return (
    <Container maxWidth="md">
      <Header />

      <Stack spacing={2}>
        <div />
        <EventList events={events} />
      </Stack>

      <AddEventDialog
        open={showAddDialogFlag}
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
          setShowAddDialogFlag(false);
        }}
      />

      <FloatingAddButton
        onClick={() => {
          setShowAddDialogFlag(true);
        }}
      />
    </Container>
  );
};
