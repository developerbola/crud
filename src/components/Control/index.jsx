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

  const filterUsers = (filterBy) => {
    const filteredUsers = users.filter((user) => user.roleName === filterBy);
    setFilterBy(filterBy);
    setFilteredData(filteredUsers);
  };

  const [searchData, setSearchData] = useState("");
  const [searchedData, setSearchedData] = useState([]);
  const searchUser = (e) => {
    let searchUsers = users.filter((user) => user.name.includes(e))
    setSearchedData(searchUsers);
  };

  useEffect(() => {
    searchUser(searchData);
  }, [searchData]);

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
        <Panel
          filterUsers={filterUsers}
          setSearchData={setSearchData}
          searchData={searchData}
        />
        <Users
          filteredData={filteredData}
          filterBy={filterBy}
          searchData={searchData}
          searchedData={searchedData}
        />
      </Box>
    </>
  );
};

export default Index;
