import React from "react";
import styled from "styled-components";
import paths from "../../../constants/pathConstants";
import { useDispatch } from "react-redux";
import { deleteUser } from "../../../store/user";
import ThreeDotsDrop from "../../../components/Dropdowns/ThreeDotsDrop";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid lightgray;
`;
const Image = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
`;
const ImageWrapper = styled.div`
  padding: 20px;
`;
const DataWrapper = styled.div`
  line-height: 1;
  flex: 2;
`;
const NameWrapper = styled.div`
  display: flex;
  column-gap: 10px;
  margin-bottom: 5px;
`;
const Name = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  line-height: 18px;
  color: #4f5b6b;
`;
const Email = styled.div`
  font-size: 14px;
  line-height: 18px;
  color: #565656;
`;
const JobTitle = styled.div`
  color: #848484;
`;
const Manager = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f2f2f2;
  border-radius: 15px;
  color: #232323;
  text-align: center;
  width: 81px;
  height: 20px;
  font-size: 12px;
  line-height: 12px;
  margin-right: 30px;
`;
function UserItem({ data }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteUser(data.userId));
  };
  return (
    <>
      <Wrapper>
        <ImageWrapper>
          <Image src={data.avatar} />
        </ImageWrapper>
        <DataWrapper>
          <NameWrapper>
            <Name>{data.firstName + " " + data.lastName}</Name>
            <Email>{data.email}</Email>
          </NameWrapper>
          <JobTitle>{data.jobTitle}</JobTitle>
        </DataWrapper>
        {data.role === "manager" ? (
          <Manager>
            <p>manager</p>
          </Manager>
        ) : (
          <div></div>
        )}
        <ThreeDotsDrop
          path={paths.PROFILE}
          id={data.userId}
          model="user"
          onDelete={handleDelete}
        />
      </Wrapper>
    </>
  );
}

export default UserItem;
