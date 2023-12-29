import {
  Box,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Button,
} from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import req from "../../api/api";
import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

const Index = ({ filteredData, filterBy, searchedData, searchData }) => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      let res = await req.allUsers();
      return setUsers(res);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const navigate = useNavigate();

  const deletePost = (id) => {
    req.deletePost(id);
    getUsers();
  };

  const roleColor = function (role) {
    if (role == "Super Admin") {
      return "#00ff4b30";
    } else if (role == "Admin") {
      return "#ffd10030";
    } else if (role == "Customer") {
      return "#ff000030";
    } else {
      return "#ff000030";
    }
  };

  return (
    <>
      <Box
        sx={{
          minHeight: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <TableContainer>
          <Table aria-label="simple table" sx={{ position: "relative" }}>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Username</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Contact</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Role</TableCell>
              </TableRow>
            </TableHead>
            {filterBy
              ? filteredData.map((users) => {
                  return (
                    <TableBody key={users.id}>
                      <TableRow
                        hover
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                          cursor: "pointer",
                        }}
                        onClick={() => navigate(`/users/${users.id}`)}
                      >
                        <TableCell>{users.name}</TableCell>
                        <TableCell>{users.username}</TableCell>
                        <TableCell>{users.email}</TableCell>
                        <TableCell>{users.contact}</TableCell>
                        <TableCell>{users.address}</TableCell>
                        <TableCell>
                          <span
                            style={{
                              background: roleColor(users.roleName),
                              textAlign: "center",
                              padding: "10px 12px",
                              borderRadius: "20px",
                            }}
                          >
                            {users.roleName}
                          </span>
                        </TableCell>
                        <TableCell sx={{ width: "12%" }}>
                          <Button>
                            <EditIcon />
                          </Button>
                          <Button
                            sx={{ color: "red" }}
                            onClick={() => deletePost(users.id)}
                          >
                            <DeleteOutlineIcon />
                          </Button>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  );
                })
              : searchData
              ? searchedData.map((users) => {
                  return (
                    <TableBody key={users.id}>
                      <TableRow
                        hover
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                          cursor: "pointer",
                        }}
                        onClick={() => navigate(`/users/${users.id}`)}
                      >
                        <TableCell>{users.name}</TableCell>
                        <TableCell>{users.username}</TableCell>
                        <TableCell>{users.email}</TableCell>
                        <TableCell>{users.contact}</TableCell>
                        <TableCell>{users.address}</TableCell>
                        <TableCell>
                          <span
                            style={{
                              background: roleColor(users.roleName),
                              textAlign: "center",
                              padding: "10px 12px",
                              borderRadius: "20px",
                            }}
                          >
                            {users.roleName}
                          </span>
                        </TableCell>
                        <TableCell sx={{ width: "12%" }}>
                          <Button>
                            <EditIcon />
                          </Button>
                          <Button
                            sx={{ color: "red" }}
                            onClick={() => deletePost(users.id)}
                          >
                            <DeleteOutlineIcon />
                          </Button>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  );
                })
              : users.map((users) => {
                  return (
                    <TableBody key={users.id}>
                      <TableRow
                        hover
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                          cursor: "pointer",
                        }}
                        onClick={() => navigate(`/users/${users.id}`)}
                      >
                        <TableCell>{users.name}</TableCell>
                        <TableCell>{users.username}</TableCell>
                        <TableCell>{users.email}</TableCell>
                        <TableCell>{users.contact}</TableCell>
                        <TableCell>{users.address}</TableCell>
                        <TableCell>
                          <span
                            style={{
                              background: roleColor(users.roleName),
                              textAlign: "center",
                              padding: "10px 12px",
                              borderRadius: "20px",
                            }}
                          >
                            {users.roleName}
                          </span>
                        </TableCell>
                        <TableCell sx={{ width: "12%" }}>
                          <Button>
                            <EditIcon />
                          </Button>
                          <Button
                            sx={{ color: "red" }}
                            onClick={() => deletePost(users.id)}
                          >
                            <DeleteOutlineIcon />
                          </Button>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  );
                })}
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default Index;
