import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  min-width: 100vw;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
`;

export const Form = styled.form`
  display: flex;
  padding: 3rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  max-width: 450px;
  gap: 30px 0px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  h1 {
    color: white;
    font-size: 20px;
    font-weight: light;
  }
  p {
    color: white;
    font-size: 16px;
    font-weight: bold;
  }
  a {
    color: white;
    font-size: 14px;
  }
`;

export const SubContainerSign = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0px 20px;
  align-items: center;
`;
