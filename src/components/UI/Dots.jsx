import { Box } from "@mui/material";
const Dots = () => {
  return (
    <Box sx={{ display: "flex", gap: "10px" }}>
      <Box
        sx={{
          height: "20px",
          width: "20px",
          bgcolor: "#FF3B30",
          borderRadius: "50%",
        }}
      ></Box>
      <Box
        sx={{
          height: "20px",
          width: "20px",
          bgcolor: "#FFB81F",
          borderRadius: "50%",
        }}
      ></Box>
      <Box
        sx={{
          height: "20px",
          width: "20px",
          bgcolor: "#27C93F",
          borderRadius: "50%",
        }}
      ></Box>
    </Box>
  );
};

export default Dots;
