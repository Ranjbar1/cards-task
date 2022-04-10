import * as React from "react";
import { ModeEditOutline } from "@mui/icons-material";
import {
  Grid,
  Box,
  Typography,
  Avatar,
  AvatarGroup,
  Container,
} from "@mui/material";
const TaskDetaile = () => {
  return (
    <Container maxWidth="sm">
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        paddingTop="15px"
      >
        <Grid item>
          <Box sx={{ paddingX: "10PX", textAlign: "left" }}>
            <Typography
              variant="caption"
              sx={{ opacity: "80%", color: "GrayText" }}
            >
              Due Date
            </Typography>
            <Typography variant="subtitle1" color="initial">
              23.11.2021
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <AvatarGroup max={5}>
            <Avatar sx={{ width: 34, height: 34 }}>s</Avatar>
            <Avatar sx={{ width: 34, height: 34 }}>v</Avatar>
            <Avatar sx={{ width: 34, height: 34 }}>as</Avatar>
            <Avatar sx={{ width: 34, height: 34 }}>s</Avatar>
            <ModeEditOutline sx={{ margin: "5px" }}></ModeEditOutline>
          </AvatarGroup>
        </Grid>
      </Grid>
    </Container>
  );
};

export default TaskDetaile;
