import { Box, Typography } from "@mui/material";

const CodeLine = ({ number, children }) => {
  return (
    <Box
      sx={{
        "&:hover": { bgcolor: "#ffffff10" },
        display: "flex",
        gap: "14px",
        transition: ".1s",
      }}
    >
      <Typography
        sx={{
          fontFamily: "Roboto Mono",
          fontSize: "1.5rem",
          pr: "12px",
          borderRight: "1px solid #fff",
          opacity: ".6",
          px: "10px",
        }}
      >
        {number}
      </Typography>
      <Typography sx={{ fontFamily: "Roboto Mono", fontSize: "1.5rem" }}>
        {children}
      </Typography>
    </Box>
  );
};

export default CodeLine;
