import {
  Box,
  TextField,
  Button,
  FormControl,
  MenuItem,
  InputLabel,
  Select,
} from "@mui/material";
import { useState } from "react";

import req from "../../api/api";
import { useNavigate } from "react-router-dom";

const index = () => {
  const roles = ["Super Admin", "Admin", "Customer"];

  const roleChange = (e) => {
    setRole(e.target.value);
  };

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddres] = useState("");
  const [contact, setContact] = useState("");
  const [role, setRole] = useState("");

  let params = {
    name: name,
    username: username,
    email: email,
    contact: contact,
    createdAt: new Date(),
    modifiedAt: new Date(),
    roleName: role,
    address: address,
  };

  const sendPost = () => {
    req.sendPost(params);
    navigate("/");

    setName("");
    setUsername("");
    setEmail("");
    setAddres("");
    setContact("");
  };
  return (
    <>
      <Box
        sx={{
          height: "80%",
          width: "40%",
          backdropFilter: "blur(10px)",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: "1",
        }}
      >
        <form
          style={{
            width: "100%",
            height: "90%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: "20px",
            marginBottom: "15px",
          }}
          onSubmit={() => sendPost()}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "center",
              gap: "20px",
              width: "100%",
              height: "100%",
            }}
          >
            <TextField
              required
              id="outlined-basic"
              sx={{ width: "70%" }}
              label="Name"
              variant="outlined"
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              required
              id="outlined-basic"
              sx={{ width: "70%" }}
              label="Username"
              variant="outlined"
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              required
              id="outlined-basic"
              sx={{ width: "70%" }}
              label="Email"
              type="email"
              variant="outlined"
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              required
              id="outlined-basic"
              sx={{ width: "70%" }}
              label="Address"
              variant="outlined"
              onChange={(e) => setAddres(e.target.value)}
            />
            <FormControl
              sx={{
                width: "70%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <InputLabel id="demo-simple-select-label">Role</InputLabel>
              <Select
                sx={{ width: "100%" }}
                value={role}
                label="Role"
                onChange={roleChange}
              >
                {roles.map((role) => {
                  return (
                    <MenuItem value={role} key={role}>
                      {role}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
            <TextField
              required
              id="outlined-basic"
              sx={{ width: "70%" }}
              label="Contact"
              type="number"
              variant="outlined"
              onChange={(e) => setContact(e.target.value)}
            />
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "20px",
            }}
          >
            <Button
              variant="outlined"
              sx={{
                width: "20%",
                color: "white",
                p: "10px 0",
                borderRadius: "20px",
                border: "1px solid #ff000090",
              }}
              onClick={() => navigate("/")}
            >
              Cancel
            </Button>
            <Button
              variant="outlined"
              sx={{
                width: "20%",
                color: "white",
                p: "10px 0",
                borderRadius: "20px",
              }}
              type="submit"
              onSubmit={() => {
                sendPost();
              }}
            >
              Submit
            </Button>
          </Box>
        </form>
      </Box>
    </>
  );
};

export default index;
