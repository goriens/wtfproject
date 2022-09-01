import { Box, Rating, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getGym } from "../Redux/App/action";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Stack } from "@mui/system";

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
      const currentData = data?.find((data) => data.user_id === id);
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
          <Rating
            name="half-rating-read"
            defaultValue={singleData?.total_rating}
            readOnly
          />
        </Box>
      </Box>

      <Box display="flex" m={8}>
        <Box width="50%">
          <Typography variant="h4">Description</Typography>
          <Typography>{singleData?.description}</Typography>
          <Box display="flex">
            {singleData?.benefits?.map((e) => (
              <Box
                m={1}
                borderRadius="10px"
                textAlign="center"
                boxShadow="rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px"
              >
                <img src={e?.image} width="100px" alt="" />
              </Box>
            ))}
          </Box>
        </Box>
        <Box width="50%" m={10}>
          <Stack>
            <Box
              display="flex"
              justifyContent="space-between"
              backgroundColor="darkred"
              p={3}
              borderRadius="10px"
              color="#fff"
            >
              <Box>
                <Typography>PLAN 1</Typography>
                <Typography variant="h4">{singleData?.plan_name}</Typography>
                <Typography>12-WEEK SPRING STRENGTH WORKOUT PROGRAM</Typography>
                <Typography>{singleData?.plan_description}</Typography>
              </Box>
              <Box width="200px">
                <Typography variant="h5" color="orange">
                  ₹ 3000
                </Typography>
              </Box>
            </Box>
            <Box></Box>
            <Box></Box>
            <Box></Box>
            <Box></Box>
            <Box></Box>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};
