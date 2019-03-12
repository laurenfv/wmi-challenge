import React from 'react';
import styled from 'styled-components';
import { Flex } from '@rebass/grid';
import SpeechBubble from '../images/speech-bubble-icon.svg';
import Compass from '../images/compass-icon.svg'
import Audi from '../images/audi.png';
import Card from '../common/Card';
import { cardConfigs } from '../utils/card-configs';

const HeroContainer = styled(Flex)`
  background : linear-gradient(227.46deg, rgba(181, 183, 185, 0) 0%, rgba(181, 183, 185, .4) 100%);
  height: auto;
  /* font-family: 'DinBlack'; */
  padding: 40px 20px 0 20px;

  & > h1 {
    font-size: 34px;
    margin-bottom: 10px;
  }

  & > h2 {
    font-size: 26px;
    margin-bottom: 10px;
    font-weight: 300;
  }

  & > h3 {
    font-size: 18px;
    margin-bottom: 10px;
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
        border: #929497 solid 1px;
        padding: 20px;
        & > input.input-field {
        border: none;
        font-size: 30px;
        width: 100%;
      }
      }
    }
  }
`;

const cards = cardConfigs.map(
  (item, index) => (
    <Card key={index} {...item.card} />
  )
);

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
        <Flex 
          className='form-wrapper'
          width={1}>
          <Flex
            as='form'
            alignItems='center'
            className='form'
            justifyContent='center'
            width={1}>
            <input className="input-field" type="text" placeholder="Palm Springs, CA" />
            <img
              alt='compass-icon'
              src={Compass} />
          </Flex>
        </Flex>
        <h5>LOOK WHAT WE FOUND FOR YOU!</h5>
      </Flex>
      {cards}
    </InfoContainer>
  </div>
);

export default Landing;
