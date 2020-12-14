import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import paths from "../../../constants/pathConstants";
import UserItem from "./UserItem";
import { loadCompanyUsers } from "../../../store/userCompany";
import { useDispatch, useSelector } from "react-redux";

const Wrapper = styled.div`
  padding: 40px;
`;
const SubHeading = styled.div`
  display: flex;
  column-gap: 40px;
`;
const Search = styled.div`
  flex-grow: 2;
`;
const Input = styled.input`
  border-radius: 20px;
  background-color: white;
  border: 1px solid lightgrey;
  font-size: 1rem;
  line-height: 1.5rem;
  font-style: normal;
  font-weight: 400;
  width: 100%;
  margin-top: 0.5rem;
  padding: 10px 10px;
  box-sizing: border-box;
`;
const Button = styled(Link)`
  background-color: #007991 !important;
  border: none;
  color: white;
  padding: 15px 60px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 2px;
  cursor: pointer;
`;
const UsersList = styled.div`
  padding-top: 20px;
`;
const Line = styled.div`
  border-left: 1px solid #e3e3e3;
  width: 1px;
  height: 700px;
`;
const Users = () => {
  const dispatch = useDispatch();
  const { profile, loading } = useSelector((state) => state.currentUser);
  const { users, error } = useSelector((state) => state.userCompany);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (profile) dispatch(loadCompanyUsers(profile.companyId, search));
  }, [loading]);

  const handleSearch = (e) => {
    const input = e.currentTarget.value;
    setSearch(input);
    dispatch(loadCompanyUsers(profile.companyId, input));
  };
  if (!users) return null;

  return (
    <Wrapper>
      <h1>Users</h1>
      <SubHeading>
        <Search>
          <Input placeholder="Search" value={search} onChange={handleSearch} />
        </Search>
        <Button to={paths.ADD_USER}>Add User</Button>
      </SubHeading>
      <UsersList>
        {users !== undefined && users.length > 0 ? (
          users.map((user) => <UserItem key={user._id} data={user} />)
        ) : (
          <h4 style={{ color: "Red" }}>{error}</h4>
        )}
      </UsersList>
      <Line />
    </Wrapper>
  );
};

export default Users;
