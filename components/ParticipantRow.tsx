import { Participant } from "@/types/Participant";
import { MoreVert } from "@mui/icons-material";
import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { ParticipationStatusSelectBox } from "./ParticipationStatusSelectBox";

type Props = {
  participant: Participant;
};

export const ParticipantRow = ({ participant }: Props) => (
  <Stack direction="row" alignItems="center">
    <Typography>{participant.name}</Typography>
    <ParticipationStatusSelectBox status={participant.status} />
    <FormGroup>
      <FormControlLabel control={<Checkbox />} label="集金済み" />
    </FormGroup>
    <Box sx={{ flexGrow: 1 }} />
    <IconButton>
      <MoreVert />
    </IconButton>
  </Stack>
);
