import React from 'react';
import styled from 'styled-components';
import { Box, Flex } from '@rebass/grid';
import SpeechBubble from '../images/speech-bubble-icon.svg';
import Compass from '../images/compass-icon.svg'
import Audi from '../images/audi.png';

const HeroContainer = styled(Flex)`
  background : linear-gradient(227.46deg, rgba(181, 183, 185, 0) 0%, rgba(181, 183, 185, .4) 100%);
  height: auto;
  /* font-family: 'DinBlack'; */
  padding: 40px 20px 0 20px;
`;

const InfoContainer = styled(Flex)`
  background : linear-gradient(227.46deg, rgba(181, 183, 185, 0) 0%, rgba(181, 183, 185, .4) 100%);
  height: auto;
  padding: 0 20px;
`;

const Landing = () => (
  <div className='body'>
    <HeroContainer
      alignItems='center'
      className='hero-main'
      flexDirection='column'
      flexWrap='nowrap'
      justifyContent='center'
      width={1}>
      <h3>The 2018</h3>
      <h1>USA FUN-FINDER&#8482;</h1>
      <h2>CHOOSE AN EVENT, GET A CAR-MATCH!</h2>
      <img
        alt='speech-bubble-icons'
        src={SpeechBubble} />
      <img
        alt='audi'
        width='335px'
        src={Audi} />
    </HeroContainer>
    <InfoContainer
      alignItems='center'
      className='info-main'
      flexDirection='column'
      flexWrap='nowrap'
      justifyContent='center'
      width={1}>
      <Flex>
        <Box>
          SEARCH FOR CITY
        </Box>
        <Box>
          FIND ON MAP
        </Box>
      </Flex>
      <Flex
        alignItems='flex-start'
        flexDirection='column'
        justifyContent='center'
        width={1}>
        <h4>FIND YOUR CITY</h4>
        <Box>
          <form>
            <Flex
              alignItems='center'
              justifyContent='space-between'>
              <input class="input-field" type="text" placeholder="PALM SPRINGS, CA" />
              <img
                alt='compass-icon'
                src={Compass} />
            </Flex>
          </form>
        </Box>
        <h4>LOOK WHAT WE FOUND FOR YOU!</h4>
      </Flex>
      cards test
      <Flex
        alignItems='center'
        flexDirection='column'
        justifyContent='center'
        width={1}>
        <Flex
          alignItems='center'
          justifyContent='space-between'
          width={1}>
          <Box>
            <h4>test</h4>
            <h6>test</h6>
          </Box>
          <Box>
            <h4>test</h4>
            <h6>test</h6>
          </Box>
        </Flex>
        <Box>
          card image
        </Box>
      </Flex>
    </InfoContainer>
  </div>
);

export default Landing;
