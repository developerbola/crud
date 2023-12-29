import { Box, Container, Tabs, Tab } from "@mui/material";
import Title from "./../UI/Title";

import Card from "../UI/Card";
import img from "../../assets/background.jpg";

const index = () => {
  let projects = [
    {
      number: "01",
      projectName: "AI Web",
      img: img,
      tags: ["React", "FireBase", "Material UI", "TypeScript"],
    },
    {
      number: "02",
      projectName: "AL-Taqvim",
      img: "https://i.pinimg.com/564x/5c/4e/1f/5c4e1f6e7c116d72d528f1b762720ec2.jpg",
      tags: ["React", "FireBase", "Tailwind"],
    },
    {
      number: "03",
      projectName: "3D Car",
      img: img,
      tags: ["React", "FireBase", "Material UI"],
    },
    {
      number: "04",
      projectName: "Mohir AI clone",
      img: img,
      tags: ["NextJS", "FireBase", "Figma", "Material UI"],
    },
    {
      number: "05",
      projectName: "Mohir AI clone",
      img: img,
      tags: ["NextJS", "FireBase", "Figma", "Material UI"],
    },
  ];
  return (
    <section id="work">
      <Box sx={{ py: "80px" }}>
        <Title title={"Work"} />
        <Container>
          <Box
            sx={{
              display: "flex",
              gap: "80px",
              flexWrap: "wrap",
            }}
          >
            {projects.map((project) => {
              return (
                <Card
                  number={project.number}
                  name={project.projectName}
                  img={project.img}
                  tags={project.tags}
                  key={project.number}
                />
              );
            })}
          </Box>
        </Container>
      </Box>
    </section>
  );
};

export default index;
