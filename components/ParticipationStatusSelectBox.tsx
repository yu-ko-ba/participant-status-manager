import { Participation } from "@/types/participation";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { ReactNode } from "react";

type Props = {
  status: Participation;
  onChange(
    event: SelectChangeEvent<Participation.StringType>,
    child: ReactNode,
  ): void;
};

export const ParticipationStatusSelectBox = ({ status, onChange }: Props) => (
  <Select
    value={Participation.toString(status)}
    sx={{ margin: 1 }}
    onChange={onChange}
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
