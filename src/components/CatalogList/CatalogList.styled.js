import styled from 'styled-components';
import { device } from '../../css/deviceSizes';

export const CatalogCards = styled.ul`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 300px;
  margin-bottom: 30px;
  padding-left: 0;

  @media ${device.tablet} {
    width: 100%;
  }
`;
