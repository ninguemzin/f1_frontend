import styled from "styled-components";

export const CarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 20px;

  @media (max-width: 1366px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const CarCard = styled.div`
  background-color: #f1f1f1;
  padding: 30px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;

  h2 {
    margin-top: 0;
  }

  p {
    margin-bottom: 10px;
  }

  img {
    width: 100%;
    height: 200px; /* Defina a altura desejada para a imagem */
    object-fit: cover; /* Ajusta a imagem para preencher o espaço mantendo a proporção */
    border-radius: 4px;
    margin-bottom: 10px;
  }
`;

export const CarMapWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 1200px) {
    padding: 0 20px;
  }
`;
