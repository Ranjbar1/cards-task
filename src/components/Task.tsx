import * as React from "react";
import { Typography, Box, Button } from "@mui/material";
const Task = () => {
  return (
    <Box sx={{ textAlign: "left", paddingX: "15px" }}>
      <Typography>Lorem ipsum, dolor sit </Typography>
      <Typography>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur
        voluptas dolorum beatae debitis, possimus a, eaque, quo maxime officiis
        perspiciatis totam.{" "}
      </Typography>
      <Button variant="outlined">SOME ACTION</Button>
    </Box>
  );
};
export default Task;
