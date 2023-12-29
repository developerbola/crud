import { Typography } from "@mui/material";
const Title = ({ title }) => {
  return (
    <Typography sx={{ fontFamily: "Alata", fontSize: "3.5rem", mb: "20px" }}>
      {title}/{">"}
    </Typography>
  );
};

export default Title;
