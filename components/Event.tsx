import { Event as EventType } from "@/types/Event";
import { Participant } from "@/types/Participant";
import { ExpandMore, MoreVert } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { ParticipantRow } from "./ParticipantRow";

type Props = {
  event: EventType;
};

export const Event = ({ event }: Props) => (
  <Accordion key={event.name}>
    <AccordionSummary expandIcon={<ExpandMore />}>
      <Typography variant="h6">
        {event.name}
      </Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Stack>
        {event.participants.map((participant: Participant) => (
          <ParticipantRow participant={participant} key={participant.name} />
        ))}
      </Stack>
    </AccordionDetails>
  </Accordion>
);
