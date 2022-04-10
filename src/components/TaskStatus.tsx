import * as React from "react";
import { Grid, Avatar, Chip } from "@mui/material";
import { green } from "@mui/material/colors";

const TaskStatus = () => {
  return (
    <Grid container sx={{ justifyItems: "center" }}>
      <Grid item>
        <Chip avatar={<Avatar>^</Avatar>} label="critical"></Chip>
      </Grid>
      <Grid item>
        <Chip label="New" sx={{ bgcolor: green }}></Chip>
      </Grid>
    </Grid>
  );
};
export default TaskStatus;
