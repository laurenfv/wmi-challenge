import React from 'react';
import styled from 'styled-components';
import { Box, Flex } from '@rebass/grid';
import HamburgerIcon from '../images/hamburger-icon.svg';
import Logo from '../images/wmi-logo.svg';

const NavBox = styled(Box)`
  background-color: #261a42;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 69px;
  padding: 0;
`;

const ButtonContainer = styled.button`
  background-color: #929497;
  border: none;
  color: #fff;
  height: 28px;
  margin-right: 22px;
  width: 105px;
`;

const MenuContainer = styled(Flex)`
  background-color: #EC008C;
  height: 69px;
  width: 69px;
`;

export const Nav = () => (
  <header className='header-main'>
    <nav>
      <NavBox
        position='fixed'
        m={0}
        width={1}
        overflow='auto'>
        <Flex
          alignItems='center'
          flexDirection='row'
          flexWrap='nowrap'
          justifyContent='space-between'
          m='0 0 0 20px'
          width={1}>
          <img
            alt='logo'
            src={Logo} />
          <Flex
            alignItems='center'
            flexDirection='row'
            flexWrap='nowrap'
            justifyContent='space-between'>
            <ButtonContainer>
              SIGN IN / JOIN
            </ButtonContainer>
            <MenuContainer
              alignItems='center'
              justifyContent='center'>
              <img
                alt='menu-icon'
                src={HamburgerIcon} />
            </MenuContainer>
          </Flex>
        </Flex>
      </NavBox>
    </nav>
  </header>
);

export default Nav;