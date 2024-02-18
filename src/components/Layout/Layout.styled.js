import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { device } from '../../css/deviceSizes';

export const NavBarThumb = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  z-index: 1000;
  margin: 0 auto;
  padding: 0 15px;

  background-color: var(--text-clr-black);
  color: var(--text-special-clr);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
`;

export const NavBar = styled.nav`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60px;
  @media ${device.tablet} {
    gap: 15px;
    justify-content: flex-start;
  }
`;

export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 40px;

  font-weight: var(--font-weight-bold);

  border: 2px solid var(--text-clr-light-grey);
  border-radius: 12px;
  &.active {
    color: var(--text-clr-black);
    background-color: var(--text-special-clr);
    border: 2px solid var(--text-special-clr);
  }

  @media ${device.tablet} {
    width: 100px;
    font-size: 20px;
  }
`;

export const Section = styled.section`
  padding-top: 70px;
  @media ${device.tablet} {
    padding-top: 100px;
  }
`;
