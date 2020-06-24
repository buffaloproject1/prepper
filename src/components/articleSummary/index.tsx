import styled from '@emotion/styled'
import React from 'react'
import ArticleSummaryInterface from './interface'

const windowWidthHalf = typeof window !== 'undefined' ? window.innerWidth / 2 : 600
const windowWidthQuarter = typeof window !== 'undefined' ? window.innerWidth / 4 : 300

const ArticleSummary = (props: ArticleSummaryInterface) => (
  <Article key={props.slug}>
    <a href={`/${props.basePath}/${props.slug}`}>
      <ArticleImageParent>
        <ArticleInside>
          <picture>
            <source
              type="image/webp"
              srcSet={`${props.imagePath}?fm=webp&q=80&w=${Math.round(windowWidthHalf)}&h=${Math.round(
                windowWidthHalf,
              )}&fit=fill`}
            />
            <source
              type="image/jpg"
              srcSet={`${props.imagePath}?fm=jpg&q=80&w=${Math.round(windowWidthHalf)}&h=${Math.round(
                windowWidthHalf,
              )}&fit=fill`}
            />
            <img
              src={`${props.imagePath}?fm=jpg&q=80&w=${Math.round(windowWidthHalf)}&h=${Math.round(
                windowWidthHalf,
              )}&fit=fill`}
            />
          </picture>
        </ArticleInside>
      </ArticleImageParent>
      <OverlayContainer>
        <ArticleOverlay>
          <h3>{props.title}</h3>
          <ArticleDescription>{props.description}</ArticleDescription>
        </ArticleOverlay>
      </OverlayContainer>
    </a>
  </Article>
)

const ArticleInside = styled.div`
  display: block;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
  -ms-transform: scale(1);
  -moz-transform: scale(1);
  -webkit-transform: scale(1);
  -o-transform: scale(1);
  transform: scale(1);
  -webkit-transition: all 1s;
  -moz-transition: all 1s;
  -o-transition: all 1s;
  transition: all 1s;
  &:before {
    position: absolute;
    content: ' ';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
    z-index: 0;
    background-color: rgba(51, 51, 51, 0.25);
  }
`

const Article = styled.div`
  width: 100%;
  display: inline-block;
  height: 150%;
  position: relative;
  &:hover ${ArticleInside} {
    -ms-transform: scale(1.2);
    -moz-transform: scale(1.2);
    -webkit-transform: scale(1.2);
    -o-transform: scale(1.2);
    transform: scale(1.2);
    -webkit-transition: all 7s linear;
    -moz-transition: all 7s linear;
    -o-transition: all 7s linear;
    transition: all 7s linear;
  }
`

const ArticleImageParent = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
`

const ArticleOverlay = styled.div`
  position: absolute;
  z-index: 100;
  bottom: -98px;
  left: 20px;
  width: calc(100% - 40px);
  color: #fff;
  -webkit-transition: bottom 0.5s ease-out;
  -moz-transition: bottom 0.5s ease-out;
  -o-transition: bottom 0.5s ease-out;
  transition: bottom 0.5s ease-out;
  @media (max-width: 767px) {
    bottom: 50%;
    text-align: center;
    h3 {
      font-size: 2rem;
    }
  }
  &:hover ${ArticleImageParent} ${ArticleInside} {
    -ms-transform: scale(1.2);
    -moz-transform: scale(1.2);
    -webkit-transform: scale(1.2);
    -o-transform: scale(1.2);
    transform: scale(1.2);
    -webkit-transition: all 3s;
    -moz-transition: all 3s;
    -o-transition: all 3s;
    transition: all 3s;
  }
`

const OverlayContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  overflow: hidden;
  &:hover ${ArticleOverlay} {
    bottom: 20px;
    -webkit-transition: bottom 0.5s ease-out;
    -moz-transition: bottom 0.5s ease-out;
    -o-transition: bottom 0.5s ease-out;
    transition: bottom 0.5s ease-out;
    @media (max-width: 767px) {
      bottom: 50%;
    }
  }
`

const ArticleDescription = styled.div`
  font-family: 'Nunito', sans-serif;
  font-size: 0.85em;
  color: #ffffff;
  height: 100px;
  max-height: 100px;
  display: block;
  padding-top: 20px;
  @media (max-width: 767px) {
    font-size: 1.2rem;
  }
`

export default ArticleSummary
