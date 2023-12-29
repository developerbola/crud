import { Box, Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import "./style.css";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        type: "tween",
        duration: "2",
      }}
    >
      <Button
        sx={{
          position: "fixed",
          top: "77%",
          left: "90%",
          height: 110,
          width: 110,
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          zIndex: "1",
          bgcolor: "#ffffff20",
          backdropFilter: "blur(10px)",
          color: "#fff",
        }}
      >
        <Box sx={{ position: "absolute" }}>
          <FontAwesomeIcon icon={faPen} fontSize={"1.6rem"} />
        </Box>
        <svg
          viewBox="0 0 100 100"
          width="100"
          height="100"
          className="hireMeBtn"
        >
          <defs>
            <path
              id="circle"
              d="
              M 50, 50
              m -37, 0
              a 37,37 0 1,1 74,0
              a 37,37 0 1,1 -74,0"
            />
          </defs>
          <text fontSize="17">
            <textPath xlinkHref="#circle" fontFamily="Alata">
              Hire Me · Hire Me · Hire Me · Hire Me
            </textPath>
          </text>
        </svg>
      </Button>
    </motion.div>
  );
};

export default Index;
