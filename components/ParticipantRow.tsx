import { Participant } from "@/types/Participant";
import { Participation } from "@/types/participation";
import { MoreVert } from "@mui/icons-material";
import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  IconButton,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";

type Props = {
  participant: Participant;
};

export const ParticipantRow = ({ participant }: Props) => (
  <Stack direction="row" alignItems="center">
    <Typography>{participant.name}</Typography>
    <Select
      value={Participation.toString(participant.status)}
    >
      <MenuItem value={Participation.toString(Participation.will)}>
        {Participation.toString(Participation.will)}
      </MenuItem>
      <MenuItem value={Participation.toString(Participation.in)}>
        {Participation.toString(Participation.in)}
      </MenuItem>
      <MenuItem value={Participation.toString(Participation.finish)}>
        {Participation.toString(Participation.finish)}
      </MenuItem>
    </Select>
    <FormGroup>
      <FormControlLabel control={<Checkbox />} label="集金済み" />
    </FormGroup>
    <Box sx={{ flexGrow: 1 }} />
    <IconButton>
      <MoreVert />
    </IconButton>
  </Stack>
);
