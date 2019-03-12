import React from 'react';
import PropTypes from 'prop-types'; 
import styled from 'styled-components';
import { Box, Flex } from '@rebass/grid';

const CardWrapper = styled(Flex)`
  margin-bottom: 40px;

  & > .titles {
    .left-titles {
      & > h4 {
        color: #242d33;
        font-size: 21px;
        font-weight: 300;
      }
      & > h6 {
        color: #808080;
        font-size: 10px;
      }
    }
    .right-titles {
      & > h4 {
        color: #242d33;
        font-size: 21px;
        font-weight: 300;
      }
      & > h6 {
        color: #808080;
        font-size: 10px;
      }
    }
  }

  & > .card-header-image {
    background-size: cover;
    background-position: center;
    border-radius: 15px;
    box-shadow: -1px 0px 22px 1px rgba(0,0,0,0.27);
    height: 300px;
    margin-top: 20px;
    z-index: 100;

    .tennis-ball {
      align-self: flex-end;
      margin: -20px 20% 0 0;
      width: 80px;
      height: 80px;
    }

    .porsche {
      align-self: flex-end;
      margin-top: 80px;
      height: 127px;
      width: 192px;
    }

    & > h4 {
      margin: -175px 0 0 15px;
    }
  }
  & > .card-tab {
    background-color: #EC008C;
    height: 70px;
    border-radius: 0 0 15px 15px;
    box-shadow: -1px 0px 22px 1px rgba(0,0,0,0.27);
    margin-top: -25px;
    z-index: 5;

    & > h4 {
      color: #fff;
      font-weight: 400;
      margin: 0 0 12px 15px;
    }
  }
  & > .card-border {
    background-color: #261a42;
    height: 30px;
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

export const Card = ({
  car,
  carImg,
  headerImg,
  miles,
  subtitle,
  title,
  topImg,
}) => (
  <Flex
    alignItems='center'
    justifyContent='space-evenly'
    flexWrap='wrap'
    width={1}>
    <CardWrapper
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
          <h4>{title}</h4>
          <h6>{subtitle}</h6>
        </Box>
        <Box className='right-titles'>
          <h4>{miles}</h4>
          <h6>MILES</h6>
        </Box>
      </Flex>
      <Flex
        alignItems='space-between'
        justifyContent='space-between'
        flexDirection='column'
        className='card-header-image'
        style={{backgroundImage: `url(${headerImg})`}}
        width={1}>
        <img
          alt='attraction'
          className='tennis-ball'
          src={topImg} />
        <img
          alt='car'
          className='porsche'
          src={carImg} />
        <h4>BEST ENJOYED WITH</h4>
      </Flex>
      <Flex
        alignItems='flex-end'
        className='card-tab'
        width={1}>
        <h4>{car}</h4>
      </Flex>
      <Box
        className='card-border'
        width={1} />
    </CardWrapper>
  </Flex>
);

Card.propTypes = {
  car: PropTypes.string.isRequired,
  carImg: PropTypes.string.isRequired,
  headerImg: PropTypes.string.isRequired,
  miles: PropTypes.number.isRequired,
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  topImg: PropTypes.string.isRequired,
};

export default Card;