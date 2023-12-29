import { Box, Typography, Divider, Chip } from "@mui/material";

const Card = ({ number, img, name, tags }) => {
  return (
    <Box
      sx={{
        height: "250px",
        width: "500px",
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        borderRadius: "18px",
        position: "relative",
        cursor: "pointer",
      }}
    >
      <Typography
        sx={{
          position: "absolute",
          top: "-5%",
          left: "80%",
          height: "55px",
          width: "55px",
          bgcolor: "#ffffff20",
          backdropFilter: "blur(15px)",
          borderRadius: "15px",
          fontSize: "1.7rem",
          fontFamily: "Roboto Mono",
          fontWeight: "200",
          display: "grid",
          placeItems: "center",
          cursor: "default",
        }}
      >
        {number}
      </Typography>
      <Box
        sx={{
          position: "absolute",
          top: "40%",
          left: "-7%",
          width: "100%",
          height: "40%",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <Typography sx={{ fontFamily: "Alata", fontSize: "1.7rem" }}>
          {name}
        </Typography>
        <Divider
          sx={{
            bgcolor: "#ffffff90",
            height: "5px",
            width: "150px",
            borderRadius: "10px",
          }}
        ></Divider>
        <Box
          sx={{
            display: "flex",
            gap: "8px",
            flexWrap: "wrap",
            width: "50%",
          }}
        >
          {tags.map((tag) => {
            return (
              <Chip
                label={tag}
                sx={{
                  color: "#ffffffcc",
                  bgcolor: "#ffffff30",
                  fontFamily: "Alata",
                  fontSize: "1.1rem",
                  backdropFilter: "blur(20px)",
                  cursor: "pointer",
                }}
                key={tag}
              />
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default Card;
