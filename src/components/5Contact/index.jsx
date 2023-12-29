// * FontAwesome
import {
  faLinkedin,
  faTelegram,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

// ? UI
import ContactLink from "../UI/ContactLink";
import Title from "../UI/Title";
import { Box, Typography } from "@mui/material";

const index = () => {
  return (
    <section id="contact">
      <Box sx={{ mb: "20px" }}>
        <Title title={"Contact"} />
        <Box>
          <Typography
            sx={{
              fontFamily: "Alata",
              fontSize: "2rem",
              my: "20px",
              bgcolor: "#fff",
              color: "#000",
              p: "5px 10px",
              width: "200px"
            }}
          >
            Find me on:
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap" }}>
            <ContactLink icon={faLinkedin} link={"developerbola"} />
            <ContactLink icon={faTelegram} link={"developer_bola"} />
            <ContactLink icon={faInstagram} link={"developer_bola"} />
            <ContactLink icon={faEnvelope} link={"developerbola08@gmail.com"} />
            <ContactLink icon={faGithub} link={"developerbola"} />
          </Box>
        </Box>
      </Box>
    </section>
  );
};

export default index;
