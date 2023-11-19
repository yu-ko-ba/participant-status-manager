import { Participation } from "@/types/participation";
import { MenuItem, Select } from "@mui/material";

type Props = {
  status: Participation
}

export const ParticipationStatusSelectBox = ({ status }: Props) => (
  <Select
    value={Participation.toString(status)}
    sx={{ margin: 1 }}
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
);
