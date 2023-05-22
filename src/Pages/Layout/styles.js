import styled from "styled-components";

export const Background = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  min-width: 100vw;
  background-repeat: repeat-y;
  background-size: cover;
  height: 100%;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;
