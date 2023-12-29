import { Box, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactLink = ({ icon, link }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        width: "50%",
        gap: "20px",
        p: "15px 0",
      }}
    >
      <FontAwesomeIcon icon={icon} size="3x" style={{ opacity: ".8" }} />
      <Typography sx={{ fontSize: "2.2rem", fontFamily: "Alata" }}>
        {link}
      </Typography>
    </Box>
  );
};

export default ContactLink;
