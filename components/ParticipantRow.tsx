import { Participant } from "@/types/Participant";
import { Delete, MoreVert } from "@mui/icons-material";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  IconButton,
  Menu,
  MenuItem,
  SelectChangeEvent,
  Stack,
  Typography,
} from "@mui/material";
import { ParticipationStatusSelectBox } from "./ParticipationStatusSelectBox";
import { Participation } from "@/types/participation";
import { useState } from "react";

type Props = {
  participant: Participant;
};

export const ParticipantRow = ({ participant }: Props) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const ParticipantRowMenu = () => (
    <Menu
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={() => {
        setAnchorEl(null);
      }}
    >
      <MenuItem>
        <Button color="error" startIcon={<Delete />}>
          削除
        </Button>
      </MenuItem>
    </Menu>
  );

  return (
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
      <IconButton
        onClick={(e) => {
          setAnchorEl(e.currentTarget);
        }}
      >
        <MoreVert />
      </IconButton>

      <ParticipantRowMenu />
    </Stack>
  );
};
