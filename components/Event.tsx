import { Event as EventType } from "@/types/Event";
import { Participant } from "@/types/Participant";
import { Add, ExpandMore, OpenInNew } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Divider,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import { ParticipantRow } from "./ParticipantRow";

type Props = {
  event: EventType;
  onAddParticipantButtonClicked: () => void;
};

export const Event = ({ event, onAddParticipantButtonClicked }: Props) => (
  <Accordion>
    <AccordionSummary expandIcon={<ExpandMore />}>
      <Typography variant="h6">
        {event.name}
      </Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Stack>
        {event.website == ""
          ? ""
          : (
            <Link href={event.website} target="_blank" rel="noopener">
              {event.website}
              <OpenInNew />
            </Link>
          )}
        {event.participants.map((participant: Participant, index: number) => (
          <Box key={index}>
            <Divider />
            <ParticipantRow participant={participant} />
          </Box>
        ))}
        <Divider />
        <Stack direction="row">
          <Button
            startIcon={<Add />}
            onClick={onAddParticipantButtonClicked}
          >
            参加者を追加
          </Button>
        </Stack>
      </Stack>
    </AccordionDetails>
  </Accordion>
);
