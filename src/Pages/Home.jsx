import { Box, Stack } from "@mui/material";
import React from "react";
import { Search } from "../Components/Search";
import { SideBar } from "../Components/SideBar";
import { Card } from "./../Components/Card";
import { useSelector, useDispatch } from "react-redux";
import { getGym } from "./../Redux/App/action";

export const Home = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.AppReducer.data);
  // const isLoading = useSelector((state) => state.AppReducer.isLoading);
  console.log(data);
  React.useEffect(() => {
    dispatch(getGym());
  }, [dispatch]);

  return (
    <Box>
      <Search />
      <Stack direction="row" spacing={3}>
        <Box>
          <SideBar />
        </Box>
        <Box width="1000px" m="auto">
          {data.map((item) => (
            <Card key={item.user_id} {...item} />
          ))}
        </Box>
      </Stack>
    </Box>
  );
};
