import { Grid, Container } from "@mui/material";
import Avatars from "./Avatars";
import DetailDate from "./DetailDate";
const TaskDetaile = ({ attendets }: { attendets: number }) => {
  return (
    <Container maxWidth="sm">
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        paddingTop="15px"
      >
        <Grid item>
          <DetailDate></DetailDate>
        </Grid>
        <Grid item>
          <Avatars attendets={attendets}></Avatars>
        </Grid>
      </Grid>
    </Container>
  );
};

export default TaskDetaile;
