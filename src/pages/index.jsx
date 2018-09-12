/* global tw */
/* eslint no-unused-expressions: 0 */
/* eslint react/prefer-stateless-function: 0 */
/* eslint no-return-assign: 0 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { injectGlobal } from 'react-emotion';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import 'typeface-poppins';
import favicon from '../favicon.png';
import Slider from '../components/Slider';
import '../swiper.css';

injectGlobal`
  *::before,
  *::after {
    box-sizing: border-box;
  }
  ::selection {
    color: white;
    background-color: #f6993f;
  }
  html {
    background: #6574cd;
    border: 0;
    margin: 0;
    font-size: 1rem;
  }
  body {
    border: 0;
    margin: 0;
    padding: 0;
  }
  .swiper-container {
    padding-bottom: 4rem;
    padding-top: 4rem;
  }
  .swiper-button-prev, .swiper-button-next {
    top: 0;
    margin-top: 0;
    padding-left: 4px;
    padding-right: 4px;
    transform: scale(1.4);
    width: 44px;
    transition: transform 0.2s ease-in-out;
    background-size: 35px 35px;
  }
  .swiper-button-prev.swiper-button-disabled,
  .swiper-button-next.swiper-button-disabled {
    transform: scale(1);
  }
  .swiper-button-prev {
    left: 0;
  }
  .swiper-button-next {
    left: 60px;
  }
  select {
    appearance: none;
    border:none;
    font-size: 1rem;
    width: 100%;
    color: white;
    padding: .75rem 1rem;
    border-radius: .25rem;
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' fill='white'%3E%3Cpolygon points='0,0 100,0 50,50'/%3E%3C/svg%3E") #7886d7 no-repeat 98% 77%;
    background-size: 25px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,.12), 0 2px 4px 0 rgba(0,0,0,.08);
    &:focus {
      outline: 0px;
      box-shadow: 0 0 0 3px rgba(101,116,205,.5);
    }
    &:hover {
      cursor: pointer;
    }
  }
  select::-ms-expand {
    display:none;
  }
  select option {
    background: #6574cd;
    font-size: 1rem;
  }
`;

const Page = styled.div`
  ${tw(
    'text-white font-sans p-0 m-0 bg-indigo-darker antialiased border-8 bw-16 border-solid border-indigo leading-normal relative'
  )};
  background: #191e38
    url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888 13.278 60.562 12 50 12c-10.626 0-16.855 1.397-26.66 5.063l-1.767.662c-2.475.923-4.66 1.674-6.724 2.275h6.335zm0-20C13.258 2.892 8.077 4 0 4V2c5.744 0 9.951-.574 14.85-2h6.334zM77.38 0C85.239 2.966 90.502 4 100 4V2c-6.842 0-11.386-.542-16.396-2h-6.225zM0 14c8.44 0 13.718-1.21 22.272-4.402l1.768-.661C33.64 5.347 39.647 4 50 4c10.271 0 15.362 1.222 24.629 4.928C84.112 12.722 89.438 14 100 14v-2c-10.271 0-15.362-1.222-24.629-4.928C65.888 3.278 60.562 2 50 2 39.374 2 33.145 3.397 23.34 7.063l-1.767.662C13.223 10.84 8.163 12 0 12v2z' fill='%232f365f' fill-opacity='0.2' fill-rule='evenodd'/%3E%3C/svg%3E");
  min-height: calc(100vh - 16px);
  @media (min-width: 576px) {
    min-height: calc(100vh - 32px);
  }
`;

const Content = styled.section`
  ${tw('sm:px-8 px-4 md:px-24')};
`;

const Intro = styled(Content)`
  ${tw('py-8 md:py-16')};
`;

const Title = styled.h1`
  ${tw('text-3xl md:text-5xl')};
  span {
    ${tw('text-orange')};
  }
`;

const Description = styled.div`
  ${tw('text-sm sm:text-base md:text-lg max-w-lg text-grey-lighter')};
  span {
    ${tw('text-orange')};
  }
  a {
    ${tw('no-underline text-orange hover:text-orange-light')};
  }
  pre {
    ${tw('bg-indigo-darker rounded px-4 py-2 shadow-md mb-8')};
  }
  code {
    ${tw('break-normal whitespace-pre-line text-grey')};
    word-spacing: normal;
    word-break: normal;
    tab-size: 4;
    span {
      ${tw('text-yellow')};
    }
  }
  ${props => props.long && 'max-width: 60rem'};
`;

const Social = styled.section`
  ${tw('flex flex-wrap items-center justify-center sm:justify-start mt-8')};
`;

const Button = styled.a`
  ${tw(
    'cursor-pointer text-sm md:text-base mx-2 sm:mx-0 py-2 px-4 md:px-8 rounded-full no-underline shadow-md focus:outline-none focus:shadow-outline'
  )};
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: translateY(-1px);
  }
`;

const Homepage = styled(Button)`
  ${tw('bg-indigo text-white')};
`;

const GitHub = styled(Button)`
  ${tw('bg-grey-dark text-white sm:mx-4 my-4 sm:my-0')};
`;

const Twitter = styled(Button)`
  ${tw('bg-blue text-white')};
`;

const Footer = styled.footer`
  ${tw('text-center pb-6 pt-12 text-xs text-grey-light tracking-wide z-50 uppercase')};
  a {
    ${tw('text-orange hover:text-orange-light no-underline')};
  }
`;

class Index extends Component {
  render() {
    const {
      data: {
        allSitesYaml: { edges },
        site: { siteMetadata },
      },
    } = this.props;

    const params = {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      slidesPerView: 'auto',
      spaceBetween: 40,
      breakpoints: {
        460: {
          slidesPerView: 1,
        },
      },
    };

    return (
      <React.Fragment>
        <Helmet>
          <html lang="en" />
          <title>{siteMetadata.siteTitle}</title>
          <meta name="description" content="Portfolio" />
          <meta name="image" content={favicon} />
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:site_name" content="vinutv.com" />
          <meta property="og:url" content="https://gatsby-starter-portfolio.netlify.com" />
          <meta property="og:title" content="Portfolio" />
          <meta
            property="og:description"
            content="Gatsby.js starters. Primarily aimed at Designers & Photographers. Minimalistic & fast websites!"
          />
          <meta property="og:image" content={favicon} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:creator" content="@vinutv" />
          <meta name="twitter:title" content="Portfolio" />
          <meta
            name="twitter:description"
            content="Gatsby.js starters. Primarily aimed at Designers & Photographers. Minimalistic & fast websites!"
          />
          <meta name="twitter:image" content={favicon} />
        </Helmet>
        <Page>
          <Intro>
            <Title>
              Hi
              <span>.</span>
            </Title>
            <Description>
              <p>
                I'm Vinu
                <span>.</span> <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
              </p>
            </Description>
            <Social>
              <Homepage role="button" href="#">
                Homepage
              </Homepage>
              <GitHub role="button" href="#">
                GitHub
              </GitHub>
              <Twitter role="button" href="#">
                Twitter
              </Twitter>
            </Social>
          </Intro>
          <div>
            <Slider data={params} edges={edges} />
            <Slider data={params} edges={edges} />
          </div>
          <Footer>Design by</Footer>
        </Page>
      </React.Fragment>
    );
  }
}

export default Index;

Index.propTypes = {
  data: PropTypes.shape({
    allSitesYaml: PropTypes.shape({
      edges: PropTypes.array.isRequired,
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.object.isRequired,
    }),
  }).isRequired,
};

export const overview = graphql`
  query OverviewQuery {
    allSitesYaml {
      edges {
        node {
          id
          title
          name
          description
          preview
          features
          cover {
            childImageSharp {
              fluid(maxWidth: 350) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        siteTitle
      }
    }
  }
`;
