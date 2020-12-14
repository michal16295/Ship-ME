import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import paths from "../../constants/pathConstants";
import Table from "../../components/Table/Table";
import { CompaniesTable } from "../../config/TableVlues";
import { useDispatch, useSelector } from "react-redux";
import { loadUserCompanies } from "../../store/userCompany";
import { deleteCompany } from "../../store/company";
import { loadInitialCompany } from "../../store/currentCompany";
import ThreeDotsDrop from "../../components/Dropdowns/ThreeDotsDrop";
import { roles } from "../../config/roles";

const Wrapper = styled.div`
  padding: 50px;
`;
const Heading = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Input = styled.input`
  background: #ffffff;
  border: 1px solid #d8d8d8;
  box-sizing: border-box;
  background-color: white;
  font-size: 1rem;
  line-height: 1.5rem;
  font-style: normal;
  font-weight: 400;
  width: 100%;
  margin-top: 0.5rem;
  padding: 10px 10px;
`;
const Search = styled.div`
  width: 20%;
`;
const ButtonWrapper = styled.div`
  width: 15%;
  background-color: #007991 !important;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  height: 3rem;
  color: white;
  cursor: pointer;
  position: relative;
`;
const AddButton = styled(Link)`
  color: white;
  font-size: 16px;
  line-height: 16px;
  text-decoration: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Avatar = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;
const AvatarWrapper = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 50%;
`;
const Name = styled.div`
  display: flex;
  column-gap: 20px;
`;
const CompaniesScreen = (props) => {
  const dispatch = useDispatch();
  const { companies } = useSelector((state) => state.userCompany);
  const { profile } = useSelector((state) => state.currentUser);
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(loadUserCompanies(search));
  }, []);

  const handleSearch = (e) => {
    const input = e.currentTarget.value;
    setSearch(input);
    dispatch(loadUserCompanies(input));
  };

  const renderCell = (item, col) => {
    if (col.key === "companyId") {
      return item[col.key].slice(0, 5);
    }
    if (col.key === "actions") {
      return (
        <ThreeDotsDrop
          path={paths.COMPANY}
          id={item.companyId}
          model="company"
          onDelete={() => {
            dispatch(deleteCompany(item.companyId));
          }}
        />
      );
    }
    if (col.key === "name") {
      return (
        <Name>
          <AvatarWrapper>
            <Avatar src={item.avatar} />
          </AvatarWrapper>
          <div>
            <p
              style={{ textDecoration: "underline", cursor: "pointer" }}
              onClick={() => dispatch(loadInitialCompany(item.companyId))}
            >
              {item[col.key]}
            </p>
          </div>
        </Name>
      );
    }
    return item[col.key];
  };

  if (!companies) return null;
  return (
    <Wrapper>
      <Heading>
        <Search>
          <Input onChange={handleSearch} placeholder="Search" />
        </Search>
        {profile && profile.role !== roles.superAdmin && (
          <ButtonWrapper>
            <AddButton to={paths.NEW_COMPANY}>Add new company</AddButton>
          </ButtonWrapper>
        )}
      </Heading>
      {companies && (
        <Table
          columns={CompaniesTable}
          data={companies}
          renderCell={renderCell}
        />
      )}
    </Wrapper>
  );
};

export default CompaniesScreen;
