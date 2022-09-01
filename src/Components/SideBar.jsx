import {
  Box,
  TextField,
  Typography,
  Stack,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getGym } from "../Redux/App/action";

export const SideBar = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = React.useState("");
  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  useEffect(() => {
    dispatch(getGym(query));
  }, [dispatch, query]);

  return (
    <Box width="300px" p="2rem">
      <Typography m={2} variant="h3">
        Filters
      </Typography>
      <Box fullWidth m={2}>
        <Typography variant="h6">Location</Typography>
        <TextField fullWidth />
      </Box>
      <Box fullWidth m={2}>
        <Typography variant="h6">Price</Typography>
        <Stack direction="row" spacing={2}>
          <TextField fullWidth />
          <TextField fullWidth />
        </Stack>
      </Box>
      <Box fullWidth m={2}>
        <Typography variant="h6">Cities</Typography>
        {/* <TextField fullWidth /> */}

        <FormControl fullWidth>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={query}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={"New delhi"}>New delhi</MenuItem>
            <MenuItem value={"Ghaziabad"}>Ghaziabad</MenuItem>
            <MenuItem value={"Greater Noida"}>Greater Noida</MenuItem>
            <MenuItem value={"Noida"}>Noida</MenuItem>
            <MenuItem value={"Delhi"}>Delhi</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
};
