import styled from 'styled-components';
import { device } from '../../css/deviceSizes';

export const FiltersThumb = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;

  @media ${device.tablet} {
    flex-direction: row;
    gap: 45px;
    margin-bottom: 30px;
  }
`;

export const FiltersWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  @media ${device.tablet} {
    flex-direction: row;
    gap: 30px;
  }
`;

export const FilterButton = styled.button`
  width: 300px;
  height: 40px;
  border-radius: 12px;
  font-size: 18px;
  font-weight: var(--font-weight-medium);
  color: var(--text-clr-black);
  background-color: var(--text-special-clr);

  &:active {
    background-color: var(--btn-yellow-hover-focus);
  }

  @media ${device.tablet} {
    width: 200px;
    transform: background-color var(--hover-focus-trans);
    &:hover,
    &:focus {
      background-color: var(--btn-yellow-hover-focus);
    }
  }

  @media ${device.desktop} {
    width: 260px;
  }
`;
