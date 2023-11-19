import { Container, Stack } from "@mui/material";
import { Header } from "./Header";
import { EventList } from "./EventList";
import { Event } from "@/types/Event";

type Props = {
  events: Event[];
};

export const RootPageComponent = ({ events }: Props) => (
  <Container maxWidth="md">
    <Header />

    <Stack spacing={2}>
      <div />
      <EventList events={events} />
    </Stack>
  </Container>
);
