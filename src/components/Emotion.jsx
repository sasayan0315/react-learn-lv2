/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

export const Emotion = () => {
  const containerStyle = css`
    border: solid 2px;
    border-radius: 10px;
    margin: 10px;
    padding: 10px;
    display: flex;
    justify-content: space-around;
    width: 300px;
  `;

  const titleStyle = css`
    color: red;
  `;
  const buttonStyle = css`
    border-radius: 8px;
    background-color: lightblue;
  `;
  return (
    <>
      <div css={containerStyle}>
        <p css={titleStyle}>Emotion CSS TEST!</p>
        <button css={buttonStyle}>Test!</button>
      </div>
      <StyledDiv>
        <StyledLabel>Emotion Styled TEST!</StyledLabel>
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
