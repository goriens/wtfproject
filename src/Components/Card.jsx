import { Box, Button, Rating, Typography } from "@mui/material";
import React from "react";
import { Stack } from "@mui/system";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Link } from "react-router-dom";

export const Card = ({
  gym_name,
  total_rating,
  address1,
  duration_text,
  duration,
  plan_price,
  plan_name,
  cover_image,
  user_id,
}) => {
  return (
    <Link to={`/${user_id}`}>
      <Box
        display="flex"
        width="auto"
        m={3}
        sx={{
          backgroundImage:
            "linear-gradient(to right, rgba(000,0,0,0), rgba(000,0,0,1))",
          color: "#fff",
          borderRadius: "10px",
          boxShadow:
            "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
        }}
        height="360px"
      >
        <Box width="50%">
          <img
            width="100%"
            src={cover_image}
            alt=""
            className="card-img"
            height="100%"
          />
        </Box>
        <Box
          width="50%"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Stack spacing={2} p={2}>
            <Typography variant="h5">{gym_name}</Typography>
            <Rating
              name="half-rating-read"
              defaultValue={total_rating}
              readOnly
            />

            <Typography>{address1}</Typography>
            <Stack direction="row">
              <LocationOnIcon />
              <Typography>
                {duration_text} minutes away | {duration}
              </Typography>
            </Stack>
          </Stack>
          <Box display="flex" justifyContent="space-between" p={2}>
            <Typography
              sx={{ color: "orange", fontWeight: "bold", fontSize: "25px" }}
            >
              ₹{plan_price ? plan_price : 3000} ,{" "}
              {plan_name ? plan_name : "3 Months"}
            </Typography>
            <Button
              sx={{
                backgroundColor: "darkred",
                color: "#fff",
                fontSize: "19px",
              }}
              variant="contained"
            >
              Book Now
            </Button>
          </Box>
        </Box>
      </Box>
    </Link>
  );
};
