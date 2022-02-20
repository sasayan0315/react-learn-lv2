import styled from "styled-components";

export const StyledComponent = () => {
  return (
    <>
      <StyledDiv>
        <StyledLabel>StyledComponent Test!</StyledLabel>
        <StyledButton>Test!</StyledButton>
      </StyledDiv>
    </>
  );
};

const StyledDiv = styled.div`
  border: solid 2px;
  border-radius: 10px;
  margin: 10px;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  width: 300px;
`;

const StyledButton = styled.button`
  border-radius: 8px;
  background-color: lightblue;
`;

const StyledLabel = styled.p`
  color: red;
`;
