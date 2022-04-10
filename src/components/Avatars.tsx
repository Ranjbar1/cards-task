import { Avatar, AvatarGroup } from "@mui/material";
import { ModeEditOutline } from "@mui/icons-material";
import { blue } from "@mui/material/colors";

const AvatarStyle = {
  bgcolor: blue[200],
  fontSize: "12px",
  fontWeight: "lighter",
};
let Persons = [
  { id: 1, name: "D" },
  { id: 2, name: "Y" },
  { id: 3, name: "M" },
  { id: 4, name: "S" },
];
const Avatars = ({ attendets }: { attendets: number }) => {
  return (
    <AvatarGroup max={attendets}>
      {Persons.map((person) => (
        <Avatar key={person.id} sx={AvatarStyle}>
          {person.name}
        </Avatar>
      ))}

      <ModeEditOutline sx={{ width: "18px", pt: "8px" }}></ModeEditOutline>
    </AvatarGroup>
  );
};
export default Avatars;
