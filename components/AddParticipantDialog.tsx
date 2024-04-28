import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useState } from "react";

type Props = {
  open: boolean;
  onAddButtonClicked: (name: string) => void;
  onClose: () => void;
};

export const AddParticipantDialog = (
  { open, onAddButtonClicked, onClose: _onClose }: Props,
) => {
  const [name, setName] = useState("");

  const onClose = () => {
    setName("");
    _onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
    >
      <DialogTitle>参加者を追加</DialogTitle>
      <DialogContent>
        <TextField
          label="参加者名"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          margin="dense"
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button
          variant="outlined"
          onClick={onClose}
          fullWidth
        >
          キャンセル
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            onAddButtonClicked(name);
            onClose();
          }}
          disabled={name == ""}
          fullWidth
        >
          作成
        </Button>
      </DialogActions>
    </Dialog>
  );
};
