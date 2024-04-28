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
import { AddParticipantDialog } from "./AddParticipantDialog";
import { useState } from "react";

type Props = {
  event: EventType;
  onAddParticipantButtonClicked: (newParticipantName: string) => void;
};

export const Event = ({ event, onAddParticipantButtonClicked }: Props) => {
  const [addparticipantDialogIsDisplayed, setAddparticipantDialogIsDisplayed] =
    useState(false);

  return (
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
              onClick={() => {
                setAddparticipantDialogIsDisplayed(true);
              }}
            >
              参加者を追加
            </Button>
          </Stack>
        </Stack>
      </AccordionDetails>

      <AddParticipantDialog
        open={addparticipantDialogIsDisplayed}
        onAddButtonClicked={onAddParticipantButtonClicked}
        onClose={() => {
          setAddparticipantDialogIsDisplayed(false);
        }}
      />
    </Accordion>
  );
};
