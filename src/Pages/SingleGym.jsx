import { Box, Rating, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getGym } from "../Redux/App/action";
// import { LocationOnIcon } from "@mui/icons-material";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export const SingleGym = () => {
  const { id } = useParams();
  const data = useSelector((state) => state.AppReducer.data);
  const dispatch = useDispatch();
  const [singleData, setSingleData] = useState();

  useEffect(() => {
    if (data.length === 0) {
      dispatch(getGym());
    }
  }, [dispatch, data.length]);

  useEffect(() => {
    if (data) {
      const currentData = data.find((data) => data.user_id === id);
      setSingleData(currentData);
    }
  }, [id, data]);

  console.log("user", singleData);

  return (
    <Box>
      <img
        src={singleData?.cover_image}
        alt=""
        width="100%"
        height="500px"
        className="single-img"
      />
      <Box display="flex" justifyContent="space-between" m={8}>
        <Box>
          <Typography variant="h3">{singleData?.gym_name}</Typography>
          <Typography variant="h5">
            <LocationOnIcon /> {singleData?.address1}
          </Typography>
        </Box>
        <Box>
          <Rating />
        </Box>
      </Box>
    </Box>
  );
};
