import { Box, Typography } from "@mui/material";
import "./code.scss";
import Title from "../UI/Title";
import Dots from "./../UI/Dots";
import CodeLine from "./../UI/CodeLine";

const index = () => {
  return (
    <>
      <section id="about">
        <Title title="About" />
        <Box
          sx={{
            bgcolor: "#00000050",
            height: "60vh",
            borderRadius: "20px",
            p: "20px 30px",
            backdropFilter: "blur(2px)",
          }}
        >
          <Dots />
          <Box sx={{ p: "20px 0", cursor: "text" }}>
            <CodeLine number={"1"}>
              <span className="qzl">const</span>{" "}
              <span className="name">fullName</span>{" "}
              <span className="qzl">=</span>{" "}
              <span className="string">“Tuhtamatov Qobiljon”</span>;
            </CodeLine>
            <CodeLine number={"2"}>
              <span className="qzl">const</span>{" "}
              <span className="name">age</span> <span className="qzl">=</span>{" "}
              <span className="name">15</span>;
            </CodeLine>
            <CodeLine number={"3"}></CodeLine>
            <CodeLine number={"4"}>
              <span className="qzl">let</span> iCodingKnowledge{" "}
              <span className="qzl">=</span> <span className="name">[</span>
              <span className="string">
                “HTML/CSS/JavaScript”, “ReactJS”, “TypeScript”, “FireBase”,
                “NextJS”, “npm/yarn”, “vite”, “Material UI”, “SASS/SCSS”,
                “Bootstrap”
              </span>
              <span className="name">]</span>;
            </CodeLine>
            <CodeLine number={"5"}>
              <span className="qzl">let</span> iDesigningKnowledge{" "}
              <span className="qzl">=</span> <span className="name">[</span>
              <span className="string">“Photoshop”, “Blender”, “Figma”</span>
              <span className="name">]</span>;
            </CodeLine>
            <CodeLine number={"6"}></CodeLine>
            <CodeLine number={"7"}>
              <span className="qzl">let</span> iEducation{" "}
              <span className="qzl">=</span> <span className="name">[</span>
              <span className="string">
                “YouTube.com”, “Google.com”, “Sammi.ac”, “Chat.openai.com”
              </span>
              <span className="name">]</span>;
            </CodeLine>
            <CodeLine number={"8"}></CodeLine>
            <CodeLine number={"9"}></CodeLine>
          </Box>
        </Box>
      </section>
    </>
  );
};

export default index;
