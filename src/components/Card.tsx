import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {
  Avatar,
  AvatarGroup,
  Badge,
  Button,
  Chip,
  Divider,
  Grid,
} from "@mui/material";
import TaskStatus from "./TaskStatus";
import Task from "./Task";
import TaskDetaile from "./TaskDetaile";
const Card = () => {
  return (
    <Box>
      <TaskStatus></TaskStatus>
      <Task></Task>
      <Divider variant="middle"></Divider>
      <TaskDetaile></TaskDetaile>
    </Box>
  );
};
export default Card;
