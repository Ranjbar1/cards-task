import { Box, Typography } from "@mui/material";
const boxStyle = { paddingX: "10PX", textAlign: "left" };
const textStyle = { opacity: "80%", color: "GrayText" };
const DetailDate = () => {
  return (
    <Box sx={boxStyle}>
      <Typography variant="caption" sx={textStyle}>
        Due Date
      </Typography>
      <Typography variant="subtitle1" color="initial">
        23.11.2021
      </Typography>
    </Box>
  );
};
export default DetailDate;
