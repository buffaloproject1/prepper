import styled from '@emotion/styled';
import { Link } from 'gatsby';
import React from 'react';
import VegetablesSummaryInterface from './interface';

const VegetablesSummary = (props: VegetablesSummaryInterface) => (
  <VegetableArticle key={props.slug}>
    <Link to={`/vegetables/${props.slug}`}>
      <VegetableArticleInside style={{ backgroundImage: `url(${props.imagePath})` }}></VegetableArticleInside>
      <VegetableArticleOverlay>
        <h4 className="darkText">{props.parentVegetable}</h4>
        <h3 className="darkText">{props.title}</h3>
      </VegetableArticleOverlay>
    </Link>
  </VegetableArticle>
)

const VegetableArticle = styled.div`
  width: 33%;
  display: inline-block;
  height: 150%;
  position: relative;
`

const VegetableArticleInside = styled.div`
  display: block;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
  padding-bottom: 150%;
`

const VegetableArticleOverlay = styled.div`
  position: absolute;
  z-index: 999;
  bottom: 20px;
  left: 20px;
  color: #fff;
`

export default VegetablesSummary
