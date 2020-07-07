import styled from '@emotion/styled'
import React from 'react'
import ArticleSummary from '../articleSummary'
import ArticleSummaryVertical from '../articleSummaryVertical'
import FeatureContentRowDetail from './featuredContentRowDetail'
import FeatureContentRowProps from './interface'

const FeaturedContentRow = (props: FeatureContentRowProps) => {
  const maxNumber = Math.floor(props.features.length + 1)
  const detailPosition = Math.floor(Math.random() * (props.features.length - 0 + 1))
  const items = []
  let b = 0
  for (let a = 0; a < maxNumber; a++) {
    if (a === detailPosition) {
      items.push(
        <Col3Full key={`key${a}`} className="col3">
          <FeatureContentRowDetail {...props.details} />
        </Col3Full>,
      )
    } else {
      items.push(
        <Col3Full key={`key${a}`} className="col3">
          <ArticleSummaryVertical {...props.features[b]} />
        </Col3Full>,
      )
      b++
    }
  }

  return <FeatureContainer className="row">{items}</FeatureContainer>
}

const Col3Full = styled.div`
  width: 25%;
  padding: 0;
  @media (max-width: 767px) {
    width: 100%;
  }
`

const FeatureContainer = styled.div`
  padding-bottom: 150px;
`

export default FeaturedContentRow
