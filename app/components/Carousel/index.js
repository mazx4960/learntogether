/**
 *
 * Carousel
 *
 */

import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import {
  Box,
  Flex,
  Heading,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import { v4 } from 'uuid';

const CardSlider = styled(Slider)`
  margin-top: 4rem;
  .slick-slide {
    height: auto;
    justify-content: center;
    margin-bottom: 0.25rem;
    display: flex !important;
  }
`;

function Carousel({
  CardComponent,
  details,
  sliderName,
  sliderSettings,
  ...props
}) {
  const [sliderRef, setSliderRef] = useState(null);

  return (
    <Box position="relative" {...props}>
      <Box maxW="1280px" margin="auto">
        <Flex direction="row" align="stretch" justify="space-between">
          <Heading fontSize="4xl" letterSpacing="0.025em" align="center">
            {sliderName}
          </Heading>
          <Flex align="center">
            <IconButton
              onClick={sliderRef ? sliderRef.slickPrev : () => undefined}
              padding="0.5rem"
              mt="0px"
              ml="1.5rem"
              isRound="true"
              icon={<ArrowBackIcon color="white" />}
              colorScheme="red"
              bg={useColorModeValue('red.400', 'red.500')}
            />
            <IconButton
              onClick={sliderRef ? sliderRef.slickNext : () => undefined}
              padding="0.5rem"
              mt="0px"
              ml="1.5rem"
              isRound="true"
              icon={<ArrowForwardIcon color="white" />}
              colorScheme="red"
              bg={useColorModeValue('red.400', 'red.500')}
            />
          </Flex>
        </Flex>
        <CardSlider ref={setSliderRef} {...sliderSettings}>
          {details.map(item => (
            <CardComponent data={item} key={v4()} />
          ))}
        </CardSlider>
      </Box>
    </Box>
  );
}

Carousel.propTypes = {
  details: PropTypes.arrayOf(PropTypes.object),
  sliderName: PropTypes.string,
  CardComponent: PropTypes.elementType,
  sliderSettings: PropTypes.object,
};

export default Carousel;
