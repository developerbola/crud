import SocialIcon from "../SocialIcon";
import { Link as SocialLink } from "react-router-dom";
import {
  faInstagram,
  faGithub,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { Box } from "@mui/material";
import { motion } from "framer-motion";

const index = () => {
  return (
    <>
      <Box
        sx={{
          color: "#FFF",
          height: "100%",
          width: "20%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-end",
          gap: "15px",
          paddingBottom: "68px",
          px: "20px",
        }}
      >
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: "tween",
            delay: 0.4,
          }}
        >
          <SocialLink
            to={"https://instagram.com/developer_bola"}
            target="_blank"
          >
            <SocialIcon icon={faInstagram} color={"#C1358440"} />
          </SocialLink>
        </motion.div>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: "tween",
            delay: 0.6,
          }}
        >
          <SocialLink to={"https://github.com/developerbola"} target="_blank">
            <SocialIcon icon={faGithub} color={"#ffffff10"} />
          </SocialLink>
        </motion.div>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: "tween",
            delay: 0.8,
          }}
        >
          <SocialLink to={"Zhttps://t.me/developer_bola"} target="_blank">
            <SocialIcon icon={faTelegram} color={"#2AABEE45"} />
          </SocialLink>
        </motion.div>
      </Box>
    </>
  );
};

export default index;
