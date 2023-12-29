import { Box, Button, Container, Typography } from "@mui/material";
import "../../Styles/App.css";

import { Link } from "react-scroll";

import { motion } from "framer-motion";
import SocialMediaLinks from "../UI/SocialMediaLinks";

const index = () => {
  return (
    <section id="home">
      <Box sx={{ height: "89vh", display: "flex" }}>
        <Box
          sx={{
            display: "flex",
            width: "50%",
            height: "100%",
            backdropFilter: "blur(10px)",
            paddingTop: "50px",
          }}
        >
          <SocialMediaLinks />

          <Container
            sx={{
              height: "50%",
              marginTop: "8%",
            }}
          >
            <Box
              sx={{
                position: "relative",
              }}
            >
              <Box>
                <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                  <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      type: "tween",
                      delay: 0.5,
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "Alata",
                        fontSize: "3rem",
                        overflow: "hidden",
                        lineHeight: 1.1,
                      }}
                    >
                      I am
                    </Typography>
                  </motion.div>
                  <Typography
                    sx={{
                      fontFamily: "Alata",
                      fontSize: "6.5rem",
                      fontWeight: "bold",
                      textTransform: "uppercase",
                      lineHeight: .9,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-end",
                      overflow: "hidden",
                      pl: "10px",
                      opacity: .7
                    }}
                  >
                    <motion.div
                      initial={{ y: 100, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        type: "tween",
                        delay: 1.2,
                        duration: 0.5,
                      }}
                    >
                      c
                    </motion.div>

                    <motion.div
                      initial={{ y: 100, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        type: "tween",
                        delay: 1.3,
                        duration: 0.5,
                      }}
                    >
                      o
                    </motion.div>

                    <motion.div
                      initial={{ y: 100, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        type: "tween",
                        delay: 1.4,
                        duration: 0.5,
                      }}
                    >
                      d
                    </motion.div>

                    <motion.div
                      initial={{ y: 100, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        type: "tween",
                        delay: 1.5,
                        duration: 0.5,
                      }}
                    >
                      e
                    </motion.div>

                    <motion.div
                      initial={{ y: 100, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        type: "tween",
                        delay: 1.6,
                        duration: 0.5,
                      }}
                    >
                      r
                    </motion.div>
                  </Typography>
                </Box>
                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    type: "tween",
                    delay: 1,
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Alata",
                      fontSize: "3rem",
                      lineHeight: 1.1,
                      overflow: "hidden",
                    }}
                  >
                    Tukhtamatov
                  </Typography>
                </motion.div>
              </Box>
            </Box>
            <Box sx={{ mt: "60px" }}>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "20px" }}
              >
                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    type: "tween",
                    delay: 1.7,
                  }}
                >
                  <Typography fontSize={"3rem"} fontFamily={"Roboto"}>
                    Hi, there!
                  </Typography>
                </motion.div>
                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    type: "tween",
                    delay: 1.8,
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Alatsi",
                      fontSize: "2rem",
                      opacity: "80%",
                    }}
                  >
                    -My name is Tukhtamatov <br /> Qobiljon
                  </Typography>
                </motion.div>
                <Box sx={{ display: "flex", gap: "15px" }}>
                  <Link to="about" duration={500} smooth={true}>
                    <motion.div
                      initial={{ y: 100, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        type: "tween",
                        delay: 1.9,
                      }}
                    >
                      <Button
                        sx={{
                          color: "#fff",
                          bgcolor: "#ffffff20",
                          p: "8px 15px",
                          borderRadius: "12px",
                          textTransform: "capitalize",
                          fontSize: "1.2rem",
                          fontFamily: "Alata",
                        }}
                      >
                        Learn More
                      </Button>
                    </motion.div>
                  </Link>
                  <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      type: "tween",
                      delay: 2,
                    }}
                  >
                    <Button
                      sx={{
                        color: "#fff",
                        bgcolor: "#00ff2320",
                        p: "8px 15px",
                        borderRadius: "12px",
                        textTransform: "capitalize",
                        fontSize: "1.2rem",
                        fontFamily: "Alata",
                      }}
                      className="button"
                    >
                      Say Hello!
                      <img
                        src="/src/assets/hiHand.png"
                        alt="hiHand"
                        height={"28px"}
                      />
                    </Button>
                  </motion.div>
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>
    </section>
  );
};

export default index;
