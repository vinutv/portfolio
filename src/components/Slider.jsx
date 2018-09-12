/* global tw */
/* eslint no-unused-expressions: 0 */
/* eslint react/prefer-stateless-function: 0 */
/* eslint no-return-assign: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import Swiper from 'react-id-swiper';
import styled from 'react-emotion';
import Img from 'gatsby-image';
import rightArrow from '../right-arrow.svg';
import '../swiper.css';

const Heading = styled.h2`
  ${tw('text-2xl md:text-4xl font-normal')};
`;

const SliderContainer = styled.div`
  ${tw('sm:px-8 px-4 md:px-24')};
`;

const Item = styled.div`
  ${tw('w-64 bg-black rounded-lg shadow-lg flex')};
  height: 525px;
`;

const ItemContent = styled.div`
  ${tw('py-8 px-6 flex flex-wrap content-between relative')};
`;

const Top = styled.div`
  ${tw('z-30')};
`;

const Bottom = styled.div`
  ${tw('z-30')};
`;

const Preview = styled.a`
  ${tw('text-white inline-block text-xl relative mb-0 py-1 tracking-wide no-underline uppercase')};
  img {
    width: 18px;
    height: 18px;
    margin-left: 10px;
    position: relative;
    top: 1px;
    transition: transform 0.3s ease-in-out;
  }
  &:hover {
    img {
      transform: translateX(10px);
    }
  }
`;

const Desc = styled.div`
  ${tw('text-sm text-white opacity-75')};
`;

const BGImage = styled.div`
  ${tw('absolute pin rounded-lg')};
  .gatsby-image-outer-wrapper {
    position: static !important;
  }
  .gatsby-image-wrapper {
    position: static !important;
  }
  img {
    ${tw('rounded-lg')};
    opacity: 0.5 !important;
  }
`;

const ItemTitle = styled.h2`
  ${tw('text-white text-3xl mb-4')};
`;

const Gradient = styled.div`
  ${tw('absolute pin rounded-lg z-20')};
  background: linear-gradient(to top, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0.75) 100%);
`;

const Divider = styled.div`
  ${tw('bg-orange w-16 mb-4')};
  height: 3px;
`;

const FeaturesWrapper = styled.div`
  ${tw('text-grey-lighter text-xs flex items-end')};
  min-height: 50px;
`;

class Slider extends React.Component {
  render() {
    return (
      <SliderContainer>
        <Heading>Overview</Heading>
        <Swiper {...this.props.data}>
          {this.props.edges.map(site => {
            // if (site.node.title === 'Ima') {
            // console.log(site.node.title);
            const { id, title, description, preview, features, cover } = site.node;
            return (
              <Item key={id}>
                <ItemContent>
                  <Top>
                    <Preview href={preview}>
                      Preview <img src={rightArrow} alt="Arrow" aria-hidden="true" />
                    </Preview>
                    <Desc>{description}</Desc>
                  </Top>
                  <Bottom>
                    <ItemTitle>{title}</ItemTitle>
                    <Divider />
                    <FeaturesWrapper>{features.join(', ')}</FeaturesWrapper>
                  </Bottom>
                  <BGImage>
                    <Gradient />
                    <Img fluid={cover.childImageSharp.fluid} />
                  </BGImage>
                </ItemContent>
              </Item>
            );
            // }
          })}
        </Swiper>
      </SliderContainer>
    );
  }
}

export default Slider;

Slider.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array.isRequired,
};
