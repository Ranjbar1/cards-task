import * as React from "react";
import { Grid, Avatar, Chip, Container, Badge } from "@mui/material";
import { green } from "@mui/material/colors";

const TaskStatus = () => {
  return (
    <Container maxWidth="sm">
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        sx={{ marginTop: "7px", marginx: "4px", paddingY: "7px" }}
      >
        <Grid item>
          <Chip
            avatar={<Avatar sx={{ bgcolor: "white" }}>^</Avatar>}
            label="Critical"
            sx={{ bgcolor: "white", fontSize: "16px", color: "red" }}
          ></Chip>
        </Grid>
        <Grid item>
          <Chip
            label="New"
            sx={{
              bgcolor: "lightgreen",
              padding: "0",
              height: "20px",
              color: "white",
            }}
          ></Chip>
        </Grid>
      </Grid>
    </Container>
  );
};
export default TaskStatus;
