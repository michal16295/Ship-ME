import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Select from "react-select";
import { loadUsers } from "../../store/user";
import SubmitButton from "../../components/Form/SubmitButton";
import { ExistingUserroles } from "../../config/InitialValues";
import ErrorMessage from "../../components/Form/ErrorMessage";
import { addExistingUser } from "../../store/userCompany";

const Wrapper = styled.div`
  margin-top: 50px;
`;
const ExistingUsers = (props) => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.user);
  const { company } = useSelector((state) => state.currentCompany);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedRole, setSelectedRole] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    dispatch(loadUsers());
  }, []);
  const handleAdd = () => {
    if (!selectedUser || !selectedRole) {
      setError("Fill all the fields");
      return;
    }
    const data = {
      companyId: company._id,
      role: selectedRole,
      userId: selectedUser,
    };
    dispatch(addExistingUser(data));
  };
  return (
    <Wrapper>
      <h3>Existing Users</h3>
      {users && (
        <Select
          placeholder="Choose user"
          options={users.users}
          onChange={(v) => setSelectedUser(v.value)}
        />
      )}
      <br />
      <Select
        placeholder="Choose role"
        options={ExistingUserroles}
        onChange={(v) => setSelectedRole(v.value)}
      />
      <ErrorMessage error={error} visible={error} />
      <SubmitButton title="Add" onClick={handleAdd} />
    </Wrapper>
  );
};

export default ExistingUsers;
