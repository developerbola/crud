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

const index = ({ filterUsers }) => {
  const [filterRole, setFilterRole] = useState("");

  const handleChange = (e) => {
    setFilterRole(e.target.value);
    filterUsers(e.target.value);
  };

  const roles = ["Super Admin", "Admin", "Customer"];

  return (
    <>
      <FormControl
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          p: "30px",
        }}
      >
        <InputLabel sx={{ ml: "29px", mt: "30px" }}>Filter</InputLabel>
        <Select
          sx={{ width: "20%" }}
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

        <Box
          width={"40%"}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
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
          <TextField
            id="outlined-basic"
            label="Search by Name"
            variant="outlined"
            sx={{ width: "55%" }}
          />
        </Box>
      </FormControl>
    </>
  );
};

export default index;
