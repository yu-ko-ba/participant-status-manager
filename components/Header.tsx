import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { MoreVert } from "@mui/icons-material";

export const Header = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const HeaderMenu = () => (
    <Menu
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={() => {
        setAnchorEl(null);
      }}
    >
      <MenuItem>
        <Link href="https://github.com/yu-ko-ba/participant-status-manager/blob/main/package.json">
          オープンソース
        </Link>
      </MenuItem>

      <Divider />

      <MenuItem>
        <Link href="https://github.com/yu-ko-ba/participant-status-manager">
          ソースコード
        </Link>
      </MenuItem>

      <Divider />

      <MenuItem>
        <Link href="https://github.com/yu-ko-ba/participant-status-manager/blob/main/LICENSE">
          ライセンス
        </Link>
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar component="nav">
          <Toolbar>
            <Typography variant="h6">参加者名簿管理</Typography>

            <Box sx={{ flexGrow: 1 }} />

            <IconButton
              color="inherit"
              onClick={(e) => {
                setAnchorEl(e.currentTarget);
              }}
            >
              <MoreVert />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Toolbar />
      </Box>

      <HeaderMenu />
    </>
  );
};
