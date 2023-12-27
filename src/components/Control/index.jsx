import Panel from "../Panel";
import Users from "../Users";
import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import req from "../../api/api";

const Index = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      let res = await req.allUsers();
      setUsers(res);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    getUsers();
  }, [users]);

  const [filterBy, setFilterBy] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [searchData, setSearchData] = useState("");

  useEffect(() => {
    console.log(searchData);
  }, [searchData]);

  const filterUsers = (filterBy) => {
    const filteredUsers = users.filter((user) => user.roleName === filterBy);
    setFilterBy(filterBy);
    setFilteredData(filteredUsers);
  };

  const searchUser = (e) => {
    // const searchUsers = users.filter((user) => user.);
    console.log(searchUsers);
  };

  useEffect(() => {
    // searchUser(searchData);
  }, []);

  return (
    <>
      <Box
        sx={{
          height: "600px",
          width: "90%",
          backdropFilter: "blur(10px)",
          bgcolor: "#00000020",
          border: ".5px solid #ffffff25",
          borderRadius: "10px",
          p: "15px",
          mx: "10px",
          overflow: "hidden",
        }}
      >
        <Panel filterUsers={filterUsers} setSearchData={setSearchData} />
        <Users filteredData={filteredData} filterBy={filterBy} />
      </Box>
    </>
  );
};

export default Index;
