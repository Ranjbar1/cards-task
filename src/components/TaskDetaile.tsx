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
        <Grid item sm={5}>
          <DetailDate></DetailDate>
        </Grid>
        <Grid item sm={7}>
          <Avatars attendets={attendets}></Avatars>
        </Grid>
      </Grid>
    </Container>
  );
};

export default TaskDetaile;
