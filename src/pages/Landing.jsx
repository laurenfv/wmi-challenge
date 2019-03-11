import React from 'react';
import styled from 'styled-components';
import { Box, Flex } from '@rebass/grid';
import SpeechBubble from '../images/speech-bubble-icon.svg';
import Compass from '../images/compass-icon.svg'
import Audi from '../images/audi.png';
import TennisHeader from '../images/tennis-header.jpg';

const HeroContainer = styled(Flex)`
  background : linear-gradient(227.46deg, rgba(181, 183, 185, 0) 0%, rgba(181, 183, 185, .4) 100%);
  height: auto;
  /* font-family: 'DinBlack'; */
  padding: 40px 20px 0 20px;

  & > h1 {
    font-size: 34px;
    margin-bottom: 20px;
  }

  & > h2 {
    font-size: 26px;
    margin-bottom: 20px;
    font-weight: 300;
  }

  & > h3 {
    font-size: 18px;
    margin-bottom: 20px;
    font-weight: 400;
  }

  & .speech-bubble {
    margin-top: 20px;
  }

  & .audi {
    margin-top: -80px;
  }
`;

const InfoContainer = styled(Flex)`
  background : linear-gradient(227.46deg, rgba(181, 183, 185, 0) 0%, rgba(181, 183, 185, .4) 100%);
  height: auto;
  padding: 0 20px;

  & > .selection {
    height: 40px;
    margin-top: -20px;
    margin-bottom: 40px;

    & > .left-button {
      color: #fff;
      background: #242D33;
    }
    & > .right-button {
      background: #fff;
      border: #929497 solid 1px;
    }
  }

  & > .search {
    & > h4 {
      margin-bottom: 10px;
    }
    & > .form-wrapper {
      height: auto;
      border-bottom: #EC008C solid 3px;
      margin-bottom: 50px;

      & > .form {
        background: #fff;
        border: #929497 solid 2px;
        padding: 20px;
        & > input.input-field {
        border: none;
        font-size: 30px;
      }
      }
    }
  }
`;

const Card = styled(Flex)`
  margin-bottom: 40px;

  & > .card-header-image {
    background-image: url(${TennisHeader});
    border-radius: 15px;
    box-shadow: -1px 0px 22px 1px rgba(0,0,0,0.27);
    height: 300px;
    margin-top: 20px;
    z-index: 100;
  }
  & > .card-tab {
    background-color: #EC008C;
    height: 70px;
    border-radius: 0 0 15px 15px;
    box-shadow: -1px 0px 22px 1px rgba(0,0,0,0.27);
    margin-top: -25px;
    z-index: 5;
  }
  & > .card-border {
    background-color: #261a42;
    height: 35px;
    border-radius: 0 0 15px 15px;
    box-shadow: -1px 10px 22px 1px rgba(0,0,0,0.27);
    margin-top: -25px;
  }

  & > .titles {
    & > .left-titles {
    text-align: left;
    }

    & > .right-titles {
    text-align: right;
    }
  }
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
      <h2>The 2018</h2>
      <h1>USA FUN-FINDER&#8482;</h1>
      <h3>CHOOSE AN EVENT, GET A CAR-MATCH!</h3>
      <img
        alt='speech-bubble-icons'
        className='speech-bubble'
        src={SpeechBubble} />
      <img
        alt='audi'
        className='audi'
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
      <Flex 
        className='selection'
        width={[1, 1, 1/2]}>
        <Flex
          className='left-button'
          alignItems='center'
          justifyContent='center'
          width={1}>
          SEARCH FOR CITY
        </Flex>
        <Flex
          className='right-button'
          alignItems='center'
          justifyContent='center'
          width={1}>
          FIND ON MAP
        </Flex>
      </Flex>
      <Flex
        alignItems='flex-start'
        className='search'
        flexDirection='column'
        justifyContent='center'
        mb={40}
        width={[1, 1, 1/2]}>
        <h4>FIND YOUR CITY</h4>
        <Box className='form-wrapper'>
          <Flex
            as='form'
            alignItems='center'
            className='form'
            justifyContent='center'>
            <input className="input-field" type="text" placeholder="PALM SPRINGS, CA" />
            <img
              alt='compass-icon'
              src={Compass} />
          </Flex>
        </Box>
        <h5>LOOK WHAT WE FOUND FOR YOU!</h5>
      </Flex>
      cards test
      <Flex
      alignItems='center'
      justifyContent='space-evenly'
      flexWrap='wrap'
      width={1}>
        <Card
          alignItems='center'
          className='card'
          flexDirection='column'
          justifyContent='center'
          width={[1, 1, 1 / 3]}>
          <Flex
            alignItems='center'
            className='titles'
            justifyContent='space-between'
            width={1}>
            <Box className='left-titles'>
              <h4>test</h4>
              <h6>test</h6>
            </Box>
            <Box className='right-titles'>
              <h4>test</h4>
              <h6>test</h6>
            </Box>
          </Flex>
          <Flex
            alignItems='flex-end'
            className='card-header-image'
            width={1}>
            <h4>BEST ENJOYED WITH</h4>
          </Flex>
          <Flex
            alignItems='flex-end'
            className='card-tab'
            width={1}>
            <h4>BEST ENJOYED WITH</h4>
          </Flex>
          <Box
          className='card-border'
          width={1} />
        </Card>
      </Flex>
    </InfoContainer>
  </div>
);

export default Landing;
