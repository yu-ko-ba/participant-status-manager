import { Event as EventType } from "@/types/Event";
import { Participant } from "@/types/Participant";
import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import { ParticipantRow } from "./ParticipantRow";

type Props = {
  event: EventType;
};

export const Event = ({ event }: Props) => (
  <Accordion>
    <AccordionSummary expandIcon={<ExpandMore />}>
      <Typography variant="h6">
        {event.name}
      </Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Stack>
        {event.participants.map((participant: Participant) => (
          <Box key={participant.name}>
            <Divider />
            <ParticipantRow participant={participant} />
          </Box>
        ))}
      </Stack>
    </AccordionDetails>
  </Accordion>
);
