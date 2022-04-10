import { Typography, Box, Button, Container } from "@mui/material";
const buttonStyle = {
  fontSize: "12px",
  fontWeight: "bold",
  paddingY: "7px",
  opacity: "90%",
  marginY: "13px",
  color: "green",
  border: "1px solid green",
  borderRadius: "45px",
};
const TitleStyle = { fontWeight: "600", paddingY: "6px" };
const ContainerStyle = { textAlign: "left", paddingX: "15px" };

const Task = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={ContainerStyle}>
        <Typography variant="body1" sx={TitleStyle}>
          Lorem ipsum, dolor sit
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontWeight: "500", fontSize: "14px" }}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur
          voluptas dolorum beatae debitis, possimus a, eaque, quo maxime
          officiis perspiciatis totam.{" "}
        </Typography>
        <Button variant="outlined" sx={buttonStyle}>
          SOME ACTION
        </Button>
      </Box>
    </Container>
  );
};
export default Task;
