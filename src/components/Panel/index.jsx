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
import { Link } from "react-router-dom";

const index = ({ filterUsers, setSearchData }) => {
  const [filterRole, setFilterRole] = useState("");

  const handleChange = (e) => {
    setFilterRole(e.target.value);
    filterUsers(e.target.value);
  };

  const roles = ["Super Admin", "Admin", "Customer"];

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          p: "30px",
        }}
      >
        <Box
          width={"100%"}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <TextField
            id="outlined-basic"
            label="Search by Name"
            variant="outlined"
            sx={{ width: "30%" }}
            onChange={(e) => setSearchData(e.target.value)}
          />
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              gap: "15px",
            }}
          >
            <Link to={"/add"}>
              <Button
                variant="outlined"
                sx={{
                  color: "#fff",
                  borderRadius: "25px",
                  p: "12px 15px",
                  fontSize: "14px",
                }}
              >
                Create New
              </Button>
            </Link>
            <FormControl
              sx={{
                width: "23%",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <InputLabel>Filter</InputLabel>
              <Select
                sx={{ width: "100%" }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={filterRole}
                label="Role"
                onChange={handleChange}
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
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default index;
