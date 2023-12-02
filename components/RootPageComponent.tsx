import { Box, Container, Fab, Stack } from "@mui/material";
import { Header } from "./Header";
import { EventList } from "./EventList";
import { Event } from "@/types/Event";
import { Add } from "@mui/icons-material";

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
    <Box position="fixed" bottom={16} right={16}>
      <Fab color="primary">
        <Add />
      </Fab>
    </Box>
  </Container>
);
