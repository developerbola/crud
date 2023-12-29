import { Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const SocialIcon = ({ icon, color }) => {
  return (
    <Button
      sx={{
        bgcolor: color,
        borderRadius: "50%",
        p: "14px 17px",
        border: "1px solid #ffffff20",
        color: "#fff",
      }}
    >
      <FontAwesomeIcon icon={icon} size="3x" />
    </Button>
  );
};

export default SocialIcon;
