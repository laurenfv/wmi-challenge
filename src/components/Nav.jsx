import React from "react";
import styled from "styled-components";
import { Box, Flex } from '@rebass/grid';

const NavBox = styled(Box)`
  background-color: #261a42;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 69px;
  padding: 0;
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
          m='0 20px'
          width={1}>
          <a href='#home'>
            {/* <MyImage /> */}
          </a>
        </Flex>
      </NavBox>
    </nav>
  </header>
);

export default Nav;