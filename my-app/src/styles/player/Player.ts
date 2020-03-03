import styled from 'styled-components';
import { gray20, shadow, base } from '../colors';

export const StyledPlayer = styled.div`
  background-color: ${base};
  border-top: 1px solid ${gray20};
  box-shadow: 2px 0px 9px ${shadow};
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
    box-shadow: 5px 0px 12px ${shadow};
    grid-template-columns: repeat(1, 1fr);
    align-content: space-between;
    align-items: center;
    z-index: 999;
  }
`;
