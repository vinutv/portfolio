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
// import '../swiper.css';

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
  .swiper-container {
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    list-style: none;
    padding: 0;
    /* Fix of Webkit flickering */
    z-index: 1;
  }
  .swiper-container-no-flexbox .swiper-slide {
    float: left;
  }
  .swiper-container-vertical > .swiper-wrapper {
    flex-direction: column;
  }
  .swiper-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    transition-property: -webkit-transform;
    transition-property: transform;
    transition-property: transform, -webkit-transform;
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
  }
  .swiper-container-android .swiper-slide,
  .swiper-wrapper {
    -webkit-transform: translate3d(0px, 0, 0);
    transform: translate3d(0px, 0, 0);
  }
  .swiper-container-multirow > .swiper-wrapper {
    flex-wrap: wrap;
  }
  .swiper-container-free-mode > .swiper-wrapper {
    transition-timing-function: ease-out;
    margin: 0 auto;
  }
  .swiper-slide {
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    width: 100%;
    height: 100%;
    position: relative;
    -webkit-transition-property: -webkit-transform;
    transition-property: -webkit-transform;
    -o-transition-property: transform;
    transition-property: transform;
    transition-property: transform, -webkit-transform;
  }
  .swiper-invisible-blank-slide {
    visibility: hidden;
  }
  /* Auto Height */
  .swiper-container-autoheight,
  .swiper-container-autoheight .swiper-slide {
    height: auto;
  }
  .swiper-container-autoheight .swiper-wrapper {
    -webkit-box-align: start;
    -webkit-align-items: flex-start;
    -ms-flex-align: start;
    align-items: flex-start;
    -webkit-transition-property: height, -webkit-transform;
    transition-property: height, -webkit-transform;
    -o-transition-property: transform, height;
    transition-property: transform, height;
    transition-property: transform, height, -webkit-transform;
  }
  /* IE10 Windows Phone 8 Fixes */
  .swiper-container-wp8-horizontal,
  .swiper-container-wp8-horizontal > .swiper-wrapper {
    -ms-touch-action: pan-y;
    touch-action: pan-y;
  }
  .swiper-container-wp8-vertical,
  .swiper-container-wp8-vertical > .swiper-wrapper {
    -ms-touch-action: pan-x;
    touch-action: pan-x;
  }
  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    top: 50%;
    width: 27px;
    height: 44px;
    margin-top: -22px;
    z-index: 10;
    cursor: pointer;
    background-size: 27px 44px;
    background-position: center;
    background-repeat: no-repeat;
  }
  .swiper-button-prev.swiper-button-disabled,
  .swiper-button-next.swiper-button-disabled {
    opacity: 0.35;
    cursor: auto;
    pointer-events: none;
  }
  .swiper-button-prev,
  .swiper-container-rtl .swiper-button-next {
    background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDMxLjQ5NCAzMS40OTQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMxLjQ5NCAzMS40OTQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiPjxwYXRoIGQ9Ik0xMC4yNzMsNS4wMDljMC40NDQtMC40NDQsMS4xNDMtMC40NDQsMS41ODcsMGMwLjQyOSwwLjQyOSwwLjQyOSwxLjE0MywwLDEuNTcxbC04LjA0Nyw4LjA0N2gyNi41NTQgIGMwLjYxOSwwLDEuMTI3LDAuNDkyLDEuMTI3LDEuMTExYzAsMC42MTktMC41MDgsMS4xMjctMS4xMjcsMS4xMjdIMy44MTNsOC4wNDcsOC4wMzJjMC40MjksMC40NDQsMC40MjksMS4xNTksMCwxLjU4NyAgYy0wLjQ0NCwwLjQ0NC0xLjE0MywwLjQ0NC0xLjU4NywwbC05Ljk1Mi05Ljk1MmMtMC40MjktMC40MjktMC40MjktMS4xNDMsMC0xLjU3MUwxMC4yNzMsNS4wMDl6IiBmaWxsPSIjRkZGRkZGIi8+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+");
    left: 10px;
    right: auto;
  }
  .swiper-button-next,
  .swiper-container-rtl .swiper-button-prev {
    background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDMxLjQ5IDMxLjQ5IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMS40OSAzMS40OTsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+PHBhdGggZD0iTTIxLjIwNSw1LjAwN2MtMC40MjktMC40NDQtMS4xNDMtMC40NDQtMS41ODcsMGMtMC40MjksMC40MjktMC40MjksMS4xNDMsMCwxLjU3MWw4LjA0Nyw4LjA0N0gxLjExMSAgQzAuNDkyLDE0LjYyNiwwLDE1LjExOCwwLDE1LjczN2MwLDAuNjE5LDAuNDkyLDEuMTI3LDEuMTExLDEuMTI3aDI2LjU1NGwtOC4wNDcsOC4wMzJjLTAuNDI5LDAuNDQ0LTAuNDI5LDEuMTU5LDAsMS41ODcgIGMwLjQ0NCwwLjQ0NCwxLjE1OSwwLjQ0NCwxLjU4NywwbDkuOTUyLTkuOTUyYzAuNDQ0LTAuNDI5LDAuNDQ0LTEuMTQzLDAtMS41NzFMMjEuMjA1LDUuMDA3eiIgZmlsbD0iI0ZGRkZGRiIvPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjwvc3ZnPg==");
    right: 10px;
    left: auto;
  }
  .swiper-button-lock {
    display: none;
  }
  .swiper-pagination {
    position: absolute;
    text-align: center;
    transition: 300ms opacity;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    z-index: 10;
  }
  .swiper-pagination.swiper-pagination-hidden {
    opacity: 0;
  }
  /* Common Styles */
  .swiper-pagination-fraction,
  .swiper-pagination-custom,
  .swiper-container-horizontal > .swiper-pagination-bullets {
    bottom: 10px;
    left: 0;
    width: 100%;
  }
  /* a11y */
  .swiper-container .swiper-notification {
    position: absolute;
    left: 0;
    top: 0;
    pointer-events: none;
    opacity: 0;
    z-index: -1000;
  }
  .swiper-container-fade.swiper-container-free-mode .swiper-slide {
    transition-timing-function: ease-out;
  }
  .swiper-container-fade .swiper-slide {
    pointer-events: none;
    transition-property: opacity;
  }
  .swiper-container-fade .swiper-slide .swiper-slide {
    pointer-events: none;
  }
  .swiper-container-fade .swiper-slide-active,
  .swiper-container-fade .swiper-slide-active .swiper-slide-active {
    pointer-events: auto;
  }
  .swiper-container-cube {
    overflow: visible;
  }
  .swiper-container-cube .swiper-slide {
    pointer-events: none;
    backface-visibility: hidden;
    z-index: 1;
    visibility: hidden;
    transform-origin: 0 0;
    width: 100%;
    height: 100%;
  }
  .swiper-container-cube .swiper-slide .swiper-slide {
    pointer-events: none;
  }
  .swiper-container-cube.swiper-container-rtl .swiper-slide {
    transform-origin: 100% 0;
  }
  .swiper-container-cube .swiper-slide-active,
  .swiper-container-cube .swiper-slide-active .swiper-slide-active {
    pointer-events: auto;
  }
  .swiper-container-cube .swiper-slide-active,
  .swiper-container-cube .swiper-slide-next,
  .swiper-container-cube .swiper-slide-prev,
  .swiper-container-cube .swiper-slide-next + .swiper-slide {
    pointer-events: auto;
    visibility: visible;
  }
  .swiper-container-cube .swiper-slide-shadow-top,
  .swiper-container-cube .swiper-slide-shadow-bottom,
  .swiper-container-cube .swiper-slide-shadow-left,
  .swiper-container-cube .swiper-slide-shadow-right {
    z-index: 0;
    backface-visibility: hidden;
  }
  .swiper-container-cube .swiper-cube-shadow {
    position: absolute;
    left: 0;
    bottom: 0px;
    width: 100%;
    height: 100%;
    background: #000;
    opacity: 0.6;
    filter: blur(50px);
    z-index: 0;
  }
  .swiper-container-flip {
    overflow: visible;
  }
  .swiper-container-flip .swiper-slide {
    pointer-events: none;
    backface-visibility: hidden;
    z-index: 1;
  }
  .swiper-container-flip .swiper-slide .swiper-slide {
    pointer-events: none;
  }
  .swiper-container-flip .swiper-slide-active,
  .swiper-container-flip .swiper-slide-active .swiper-slide-active {
    pointer-events: auto;
  }
  .swiper-container-flip .swiper-slide-shadow-top,
  .swiper-container-flip .swiper-slide-shadow-bottom,
  .swiper-container-flip .swiper-slide-shadow-left,
  .swiper-container-flip .swiper-slide-shadow-right {
    z-index: 0;
    backface-visibility: hidden;
  }
  .swiper-container-coverflow .swiper-wrapper {
    /* Windows 8 IE 10 fix */
    -ms-perspective: 1200px;
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
