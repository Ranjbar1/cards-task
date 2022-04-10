import Box from "@mui/material/Box";
import { Divider } from "@mui/material";
import TaskStatus from "./TaskStatus";
import Task from "./Task";
import TaskDetaile from "./TaskDetaile";

const Card = ({ status, attendets }: { status: string; attendets: number }) => {
  return (
    <Box>
      <TaskStatus status={status}></TaskStatus>
      <Task></Task>
      <Divider variant="middle"></Divider>
      <TaskDetaile attendets={attendets}></TaskDetaile>
    </Box>
  );
};
export default Card;
