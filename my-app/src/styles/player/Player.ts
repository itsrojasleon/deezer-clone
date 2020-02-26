import styled from 'styled-components';

export const StyledPlayer = styled.div`
  background-color: white;
  border-top: 1px solid rgb(240, 240, 240);
  box-shadow: 2px 0px 9px rgba(0, 0, 0, 0.05);
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 15px;
  display: 'grid';
  grid-template-columns: repeat(3, 1fr);
  align-content: center;
  align-items: center;
  @media (max-width: 769px) {
    height: 100vh;
    box-shadow: 5px 0px 12px rgba(0, 0, 0, 0.05);
    grid-template-columns: repeat(1, 1fr);
    align-content: space-between;
    align-items: center;
    z-index: 999;
  }
`;
