import * as React from "react";
import { Typography, Box, Button, Container } from "@mui/material";
const Task = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ textAlign: "left", paddingX: "15px" }}>
        <Typography
          variant="body1"
          sx={{ fontWeight: "bold", paddingTop: "7px" }}
        >
          Lorem ipsum, dolor sit{" "}
        </Typography>
        <Typography variant="body1">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur
          voluptas dolorum beatae debitis, possimus a, eaque, quo maxime
          officiis perspiciatis totam.{" "}
        </Typography>
        <Button
          variant="outlined"
          sx={{
            fontSize: "12px",
            fontWeight: "bold",
            paddingY: "7px",
            opacity: "90%",
            marginY: "13px",
            color: "green",
            border: "1px solid green",
            borderRadius: "45px",
          }}
        >
          SOME ACTION
        </Button>
      </Box>
    </Container>
  );
};
export default Task;
