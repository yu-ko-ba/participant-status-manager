import { Add } from "@mui/icons-material";
import { Box, Fab } from "@mui/material";

type Props = {
  onClick(): void;
};

export const FloatingAddButton = ({ onClick }: Props) => (
  <Box position="fixed" bottom={16} right={16}>
    <Fab
      color="primary"
      onClick={onClick}
    >
      <Add />
    </Fab>
  </Box>
);
