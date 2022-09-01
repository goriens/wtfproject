import { Button, TextField } from "@mui/material";
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Stack } from "@mui/system";

export const Search = () => {
  return (
    <Stack direction="row" spacing={2} m={8}>
      <TextField fullWidth />
      <Button sx={{ backgroundColor: "darkred" }} variant="contained">
        <LocationOnIcon />
      </Button>
      <Button sx={{ backgroundColor: "darkred" }} variant="contained">
        Clear
      </Button>
    </Stack>
  );
};
