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
  onCreateButtonClick(eventName: string, eventURL: string): void;
  onClose(): void;
};

export const AddEventDialog = (
  { open, onCreateButtonClick, onClose: _onClose }: Props,
) => {
  const [eventName, setEventName] = useState("");
  const [eventURL, setEventURL] = useState("");

  const onClose = () => {
    setEventName("");
    setEventURL("");
    _onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
    >
      <DialogTitle>イベントを追加</DialogTitle>
      <DialogContent>
        <TextField
          label="イベント名"
          value={eventName}
          onChange={(e) => {
            setEventName(e.target.value);
          }}
          margin="dense"
          fullWidth
        />
        <TextField
          label="イベントURL（任意）"
          value={eventURL}
          onChange={(e) => {
            setEventURL(e.target.value);
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
            onCreateButtonClick(eventName, eventURL);
            onClose();
          }}
          disabled={eventName == ""}
          fullWidth
        >
          作成
        </Button>
      </DialogActions>
    </Dialog>
  );
};
