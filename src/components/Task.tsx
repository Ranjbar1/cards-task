import { Typography, Box, Button, Container, Divider } from "@mui/material";
import { grey, teal } from "@mui/material/colors";

const buttonStyle = {
  fontSize: "12px",
  fontWeight: "bold",
  paddingY: "7px",
  opacity: "90%",
  marginY: "13px",
  color: teal[600],
  border: "1px solid teal",
  borderRadius: "45px",
};
const TitleStyle = { fontWeight: "600", paddingY: "6px", color: grey[900] };
const ContainerStyle = { textAlign: "left", paddingX: "15px" };
const bodyText = { fontWeight: "500", fontSize: "14px", color: grey[800] };
const Task = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={ContainerStyle}>
        <Typography variant="body1" sx={TitleStyle}>
          Lorem ipsum, dolor sit
        </Typography>
        <Typography variant="body1" sx={bodyText}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur
          voluptas dolorum beatae debitis, possimus a, eaque, quo maxime
          officiis perspiciatis totam.{" "}
        </Typography>
        <Button variant="outlined" sx={buttonStyle}>
          SOME ACTION
        </Button>
      </Box>
      <Divider variant="middle"></Divider>
    </Container>
  );
};
export default Task;
