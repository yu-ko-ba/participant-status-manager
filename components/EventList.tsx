import { Event as EventType } from "@/types/Event";
import { Stack } from "@mui/material";
import { Event } from "./Event";

type Props = {
  events: EventType[];
};

export const EventList = ({ events }: Props) => (
  <Stack spacing={2}>
    {events.map((e: EventType) => <Event event={e} key={e.name} />)}
  </Stack>
);
