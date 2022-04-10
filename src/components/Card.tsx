import Box from "@mui/material/Box";
import TaskStatus from "./TaskStatus";
import Task from "./Task";
import TaskDetaile from "./TaskDetaile";

const Card = ({ status, attendets }: { status: string; attendets: number }) => {
  return (
    <Box>
      <TaskStatus status={status}></TaskStatus>
      <Task></Task>

      <TaskDetaile attendets={attendets}></TaskDetaile>
    </Box>
  );
};
export default Card;
