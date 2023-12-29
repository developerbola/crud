import { Box, Typography } from "@mui/material";
const index = () => {
  return (
    <>
      <Box sx={{ p: "25px 50px" }}>
        <Typography sx={{ fontFamily: "Alata", fontSize: "1.5em" }}>
          &copy; Coded and Designed by developer_bola {new Date().getFullYear()}
        </Typography>
      </Box>
    </>
  );
};

export default index;
