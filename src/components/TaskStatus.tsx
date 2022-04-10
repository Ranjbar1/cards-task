import { Grid, Avatar, Chip, Container } from "@mui/material";
import { green, red } from "@mui/material/colors";
const avatarStyle = { bgcolor: red[50], width: "5px", height: "5px" };
const TaskStatus = ({ status }: { status: string }) => {
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
            avatar={<Avatar sx={avatarStyle}>^</Avatar>}
            label={status}
            sx={{
              bgcolor: "white",
              fontSize: "16px",
              color: "red",
              height: "20px",
              fontWeight: "normal",
            }}
          ></Chip>
        </Grid>
        <Grid item>
          <Chip
            label="New"
            sx={{
              bgcolor: green[300],
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
