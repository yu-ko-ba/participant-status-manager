import { Participant } from "@/types/Participant";
import { MoreVert } from "@mui/icons-material";
import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  IconButton,
  SelectChangeEvent,
  Stack,
  Typography,
} from "@mui/material";
import { ParticipationStatusSelectBox } from "./ParticipationStatusSelectBox";
import { Participation } from "@/types/participation";

type Props = {
  participant: Participant;
};

export const ParticipantRow = ({ participant }: Props) => (
  <Stack direction="row" alignItems="center">
    <Typography>{participant.name}</Typography>
    <ParticipationStatusSelectBox
      status={participant.status}
      onChange={(e: SelectChangeEvent<Participation.StringType>) => {
        participant.setStatus(
          Participation.fromParticipationStringType(
            e.target.value as Participation.StringType,
          ),
        );
      }}
    />
    <FormGroup>
      <FormControlLabel
        control={<Checkbox />}
        label="集金済み"
        value={participant.isSettled}
        onChange={(_, checked: boolean) => {
          participant.setIsSettled(checked);
        }}
      />
    </FormGroup>
    <Box sx={{ flexGrow: 1 }} />
    <IconButton>
      <MoreVert />
    </IconButton>
  </Stack>
);
