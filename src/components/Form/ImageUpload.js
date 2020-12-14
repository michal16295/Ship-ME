import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { uploadimage } from "../../store/Image";
import ClipLoader from "react-spinners/ClipLoader";

const Image = styled.img`
  width: 100%;
  height: 100%;
`;
const Wrapper = styled.div`
  width: 140px;
  height: 140px;
  border-radius: 500px;
  position: relative;
  overflow: hidden;
`;
const Input = styled.input`
  opacity: 0;
  cursor: pointer;
`;
const PhotoChangeButton = styled.div`
  background: #232323;
  mix-blend-mode: normal;
  color: white;
  opacity: 0.8;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  text-align: center;
  padding-bottom: 1rem;
`;
const SubmitBtn = styled.button`
  position: absolute;
  color: white;
  background: #232323;
  opacity: 0.8;
`;
const ImageUpload = ({ model, currentImage, id }) => {
  const [prev, setPrev] = useState(null);
  const [file, setFile] = useState("");
  const { loading } = useSelector((state) => state.image);

  const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("file", file);
    dispatch(uploadimage(formData, model, id));
  };

  const onDrop = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      setFile(file);
      setPrev(reader.result);
    };
    reader.readAsDataURL(file);
  };
  return (
    <>
      <Wrapper>
        {loading ? (
          <ClipLoader size={140} color={"#232323"} loading={loading} />
        ) : (
          <>
            {prev ? <Image src={prev} /> : <Image src={currentImage} />}
            <PhotoChangeButton>
              Change
              <Input
                type="file"
                name="file"
                accept="image/*"
                onChange={(e) => onDrop(e)}
              />
            </PhotoChangeButton>
          </>
        )}
      </Wrapper>
      {prev && <SubmitBtn onClick={onSubmit}>Submit</SubmitBtn>}
    </>
  );
};
export default ImageUpload;
