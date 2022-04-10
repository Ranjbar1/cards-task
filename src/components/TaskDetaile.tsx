import * as React from "react";
import { Grid, Box, Typography, Avatar, AvatarGroup } from "@mui/material";
const TaskDetaile = () => {
  return (
    <Grid container columnSpacing={8}>
      <Grid item>
        <Box sx={{ paddingX: "10PX", textAlign: "left" }}>
          <Typography>Due Date</Typography>
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
          <Avatar sx={{ width: 34, height: 34 }}>g</Avatar>
          <Avatar sx={{ width: 34, height: 34 }}>sd</Avatar>
          <Avatar sx={{ width: 34, height: 34 }}>sdf</Avatar>
        </AvatarGroup>
      </Grid>
    </Grid>
  );
};

export default TaskDetaile;
