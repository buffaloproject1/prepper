import styled from '@emotion/styled'
import dateformat from 'dateformat'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import React from 'react'
import Helmet from 'react-helmet'
import LazyLoad from 'react-lazy-load'
import FeaturedContentRow from '../components/featuredContentRow'
import FeatureContentRowProps from '../components/featuredContentRow/interface'
import Footer from '../components/footer'
import GeneralContentRow from '../components/generalContentRow'
import { HeaderTheme } from '../components/header/interface'
import Layout from '../components/layout'
import {
  RecipeProps,
  AllContentfulRecipe,
  RecipeGroup,
  RecipeIngredient,
  RecipeInstructionGroup,
  RecipeInstruction,
  ProteinType,
} from '../template-interfaces/recipe'

class RecipeTemplate extends React.Component<RecipeProps> {
  render() {
    const recipeFeatures: FeatureContentRowProps = {
      details: {
        title: 'Recipes',
        description:
          'I’m baby celiac craft beer ethical godard, migas unicorn tote bag swag paleo mixtape meggings. Wayfarers forage',
        buttonCaption: 'Find Recipes',
        slug: '/recipes',
        theme: HeaderTheme.DARK,
      },
      features: [
        {
          title: 'Cornmeal Fried Okra',
          slug: 'Okra',
          imagePath:
            '//images.ctfassets.net/ce6fbxhy1t51/46pHQHUxijoTd2fpcYq3w6/52e78a0c5ab047359f4b10259b1c059f/fried-okra-rectangle.jpg',
          description:
            'The finished stew should be decidedly sour, tamarind’s calling card, but you’re in control of how ­puckery things get.',
          basePath: 'recipe',
        },
        {
          title: 'Sausage, Shrimp and Okra Gumbo',
          slug: 'Okra',
          imagePath:
            '//images.ctfassets.net/ce6fbxhy1t51/nWI1iStg20DSjv0xqjyfJ/d0ae7ed21130834667a60a4cfac3042e/Gumbo-11.jpg',
          description: 'For authentic gumbo, add filé, a Creole herb found in better markets.',
          basePath: 'recipe',
        },
        {
          title: 'Stir Fried Okra',
          slug: 'Okra',
          imagePath:
            '//images.ctfassets.net/ce6fbxhy1t51/6erFjTvbIYftFkbDbaXi6i/c08cee40d7ebd49ae5fe757314f4c59b/stir-fried-okra.jpg',
          description: 'Working in batches ensures golden and tender okra, not soft and slimy.',
          basePath: 'recipe',
        },
      ],
      basePath: 'recipe',
    }

    const Title = styled.h1`
      padding: 0 0 0.4em 0;
      @media (max-width: 767px) {
        font-size: 3.5em;
        padding: 0;
      }
    `

    const CreateDate = styled.div`
      text-align: center;
      font-family: 'Nunito', sans-serif;
      font-size: 1em;
      padding-bottom: 3.125em;
    `

    const BodyCopy = styled.div`
      color: #464646;
      font-size: 1em;
      font-family: 'Nunito', sans-serif;
      line-height: 2em;
      padding-top: 1.875em;
      padding-bottom: 1.875em;
      text-align: justify;
      @media (max-width: 767px) {
        padding-left: 10%;
        width: 80%;
      }
    `

    const BodyCopyTwoColumn = styled.div`
      color: #464646;
      column-count: 2;
      font-size: 1em;
      font-family: 'Nunito', sans-serif;
      line-height: 2em;
      padding-top: 1.875em;
      padding-bottom: 1.875em;
      text-align: justify;
      @media (max-width: 767px) {
        column-count: 1;
        padding-left: 10%;
        width: 80%;
      }
    `

    const MainContainer = styled.div`
      background-color: #fff;
      position: absolute;
      top: 15.625em;
      width: 100%;
      @media (max-width: 767px) {
        top: 6em;
      }
    `

    const InstructionTitle = styled.h2`
      color: #464646;
      font-size: 2.25em;
      padding-bottom: 50px;
    `

    const InstructionContainer = styled.div`
      display: inline-block;
      width: 66%;
      @media (max-width: 767px) {
        padding-left: 10%;
        width: 80%;
      }
    `

    const Instruction = styled.div`
      color: #464646;
      font-size: 1em;
      font-family: 'Nunito', sans-serif;
      line-height: 2em;
      padding-bottom: 1.75em;
      text-align: justify;
    `

    const IngredientContainer = styled.div`
      display: inline-block;
      width: 30%;
      padding-right: 4%;
      @media (max-width: 767px) {
        padding-left: 10%;
        width: 80%;
      }
    `

    const IngredientTitle = styled.h2`
      color: #464646;
      font-size: 2.25em;
      padding-bottom: 50px;
    `

    const Ingredient = styled.div`
      color: #464646;
      font-size: 1em;
      font-family: 'Nunito', sans-serif;
      line-height: 2em;
      padding-bottom: 1.75em;
    `

    const TagContainer = styled.div`
      display: inline-block;
      width: 100%;
      padding-right: 4%;
      @media (max-width: 767px) {
        padding-left: 10%;
        width: 80%;
      }
    `

    const TagStyled = styled.p`
      color: #464646;
      display: inline-block;
      font-size: 0.75em;
      font-family: 'Nunito', sans-serif;
      padding-right: 20px;
      text-transform: uppercase;
    `

    const GroupTitle = styled.div`
      color: #464646;
      display: inline-block;
      font-size: 1.15em;
      font-family: 'Nunito', sans-serif;
      font-weight: 600;
      padding-bottom: 10px;
    `

    const FeaturedSpacer = styled.div`
      padding-top: 50px;
      @media (max-width: 767px) {
        padding-left: 5%;
        padding-top: 0px;
        width: 90%;
      }
    `

    let step = 0
    const post: AllContentfulRecipe = get(this.props, 'data.contentfulRecipe')
    const postCreate = dateformat(post.createdAt, 'fullDate')
    const windowWidth = typeof window !== 'undefined' ? window.innerWidth : 1200
    const bodyLong = post.bodyCopy.childMarkdownRemark.rawMarkdownBody.length > 200
    const heroHeight =
      (post.heroImage.file.details.image.height * windowWidth) / post.heroImage.file.details.image.width
    const bannerHeight =
      (post.bannerImage.file.details.image.height * windowWidth) / post.bannerImage.file.details.image.width

    const keywords = new Array<string>()
    keywords.push(post.mealType)
    if (post.proteinType && post.proteinType.length > 0) {
      post.proteinType.map((pType: ProteinType) => {
        keywords.push(pType.protein)
      })
    }
    post.vegetableType.map((vegetable: string) => {
      keywords.push(vegetable)
    })

    const ingredients = post.recipeGroup.map((group: RecipeGroup) => {
      return group.ingredients.map((ingredient: RecipeIngredient) => {
        let ingre1 = ''
        if (ingredient.recipeQuantity && ingredient.recipeQuantity.recipeQuantity)
          [(ingre1 = ingredient.recipeQuantity.recipeQuantity.quantity.childMarkdownRemark.rawMarkdownBody)]
        let ingre2 = ''
        if (
          ingredient.recipeQuantity &&
          ingredient.recipeQuantity.recipeMeasurement &&
          ingredient.recipeQuantity.recipeMeasurement.mesurement
        ) {
          ingre2 = ingredient.recipeQuantity.recipeMeasurement.mesurement.childMarkdownRemark.rawMarkdownBody
        }
        const ingre3 = ingredient.ingredient.ingredient
        let ingre4 = ''
        if (ingredient.prep) {
          ingre4 = ingredient.prep.prep
        }
        return `"${ingre1} ${ingre2} ${ingre3} ${ingre4}"`
      })
    })

    const instructions = post.recipeInstructionGroups.map((group: RecipeInstructionGroup) => {
      return group.instructions.map((instruction: RecipeInstruction) => {
        step++
        return JSON.stringify({
          '@type': 'HowToStep',
          name: `${instruction.instruction.childMarkdownRemark.rawMarkdownBody}`,
          image: `${post.bannerImage.file.url}`,
          text: `${instruction.instruction.childMarkdownRemark.rawMarkdownBody}`,
          url: `https://wwww.knifeandfish.com/recipe/${post.slug}#step${step}`,
        })
      })
    })
    step = 0

    const structuredDataArticle = `{
      "@context": "http://schema.org",
      "@type": "Recipe",
      "name": "${post.title}",
      "image": ["${post.heroImage.file.url}"],
      "author": {
        "@type": "Person",
        "name": "Chris Fisher"
      },
      "datePublished": "${post.createdAt}",
      "description": "${post.bodyCopy}",
      "prepTime": "PT20M",
      "cookTime": "PT30M",
      "totalTime": "PT50M",
      "keywords": "${keywords.toString()}",
      "recipeYield": "10",
      "recipeCategory": "${post.mealType}",
      "recipeCuisine": "American",
      "nutrition": {
        "@type": "NutritionInformation",
        "calories": "270 calories"
      },
      "recipeIngredient": [${ingredients.toString()}],
      "recipeInstructions": [${instructions.toString()}]
    }`

    return (
      <Layout meta={post.bodyCopy.childMarkdownRemark.rawMarkdownBody} location={this.props.location}>
        <MainContainer style={{ background: '#fff' }}>
          <Helmet>
            {/* The description that appears under the title of your website appears on search engines results */}
            <meta name="description" content={post.bodyCopy.childMarkdownRemark.rawMarkdownBody} />

            {/* The thumbnail of your website */}
            <meta name="image" content={post.heroImage.file.url} />

            {/* Opengraph meta tags for Facebook & LinkedIn */}
            <meta property="og:url" content="'https://www.knifeandfish.com/article/${post.slug}'" />
            <meta property="og:type" content="NewsArticle" />
            <meta property="og:title" content={post.title} />
            <meta property="og:description" content={post.bodyCopy.childMarkdownRemark.rawMarkdownBody} />
            <meta property="og:image" content={post.heroImage.file.url} />

            {/* These tags work for Twitter & Slack, notice I've included more custom tags like reading time etc... */}
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:creator" content="knifeandfisher1" />
            <meta name="twitter:site" content="knifeandfisher1" />
            <meta name="twitter:title" content={post.title} />
            <meta name="twitter:description" content={post.bodyCopy.childMarkdownRemark.rawMarkdownBody} />
            <meta name="twitter:image:src" content={post.heroImage.file.url} />
            <meta name="twitter:label1" value="Reading time" />
            <meta name="twitter:data1" value={`5 min read`} />
            <meta name="author" content="Knife and Fish" data-react-helmet="true" />
            <meta name="article:published_time" content={post.createdAt} data-react-helmet="true" />

            {/* Structured data */}
            <script type="application/ld+json">{structuredDataArticle}</script>

            {/* The title of your current page */}
            <title>{post.title} | Knife & Fish</title>

            {/* Default language and direction */}
            <html lang="en" dir="ltr" amp />
          </Helmet>
          <div>
            <div className="row">
              <div className="col3" />
              <div className="col6">
                <Title className="section-headline">{post.title}</Title>
                <CreateDate>{postCreate}</CreateDate>
              </div>
              <div className="col3" />
            </div>
            <LazyLoad
              className="hidden-sm"
              width="100%"
              height={heroHeight}
              style={{ width: '100%', backgroundColor: '#FF0000' }}
              once
              offset={1000}
            >
              <picture>
                <source type="image/webp" srcSet={`${post.heroImage.file.url}?fm=webp&q=80&w=${windowWidth}`} />
                <source type="image/jpg" srcSet={`${post.heroImage.file.url}?fm=jpg&q=80&w=${windowWidth}`} />
                <img
                  src={`${post.heroImage.file.url}?fm=jpg&q=80&w=${Math.round(windowWidth)}&h=${Math.round(
                    windowWidth,
                  )}&fit=fill`}
                  alt={post.heroImage.description}
                />
              </picture>
            </LazyLoad>
            <LazyLoad
              className="hidden-lg"
              height={bannerHeight}
              style={{ width: '100%', backgroundColor: '#FF0000' }}
              once
              offset={1000}
            >
              <picture>
                <source type="image/webp" srcSet={`${post.bannerImage.file.url}?fm=webp&q=80&w=${windowWidth}`} />
                <source type="image/jpg" srcSet={`${post.bannerImage.file.url}?fm=jpg&q=80&w=${windowWidth}`} />
                <img
                  src={`${post.bannerImage.file.url}?fm=jpg&q=80&w=${Math.round(windowWidth)}&h=${Math.round(
                    windowWidth,
                  )}&fit=fill`}
                  alt={post.bannerImage.description}
                />
              </picture>
            </LazyLoad>
            <div className="row">
              <div className="col2"></div>
              <div className="col8">
                {!bodyLong && (
                  <BodyCopy
                    dangerouslySetInnerHTML={{
                      __html: post.bodyCopy.childMarkdownRemark.rawMarkdownBody,
                    }}
                  ></BodyCopy>
                )}
                {bodyLong && (
                  <BodyCopyTwoColumn
                    dangerouslySetInnerHTML={{
                      __html: post.bodyCopy.childMarkdownRemark.rawMarkdownBody,
                    }}
                  ></BodyCopyTwoColumn>
                )}
              </div>
              <div className="col2"></div>
              <div className="col2" />
              <div className="col8">
                <div>
                  <IngredientContainer>
                    <IngredientTitle>Ingredients</IngredientTitle>
                    {post.recipeGroup.map((recipeGroup: RecipeGroup, index: number) => {
                      return (
                        <div style={{ paddingBottom: '30px' }} key={`recipe-group-${index}`}>
                          {recipeGroup.displayName && post.recipeGroup.length > 1 && (
                            <GroupTitle>{recipeGroup.displayName}</GroupTitle>
                          )}
                          {recipeGroup.ingredients.map((ingredient: RecipeIngredient, index: number) => {
                            return (
                              <Ingredient key={`ingredient-${index}`}>
                                {ingredient.recipeQuantity && ingredient.recipeQuantity.recipeQuantity && (
                                  <span
                                    dangerouslySetInnerHTML={{
                                      __html:
                                        ingredient.recipeQuantity.recipeQuantity.quantity.childMarkdownRemark
                                          .rawMarkdownBody,
                                    }}
                                  ></span>
                                )}{' '}
                                {ingredient.recipeQuantity &&
                                  ingredient.recipeQuantity.recipeMeasurement &&
                                  ingredient.recipeQuantity.recipeMeasurement.mesurement && (
                                    <span>
                                      {ingredient.recipeQuantity &&
                                        ingredient.recipeQuantity.recipeMeasurement.mesurement.childMarkdownRemark
                                          .rawMarkdownBody}
                                    </span>
                                  )}{' '}
                                {ingredient.ingredient.ingredient}
                                {ingredient.prep && <span>, {ingredient.prep.prep}</span>}
                              </Ingredient>
                            )
                          })}
                        </div>
                      )
                    })}
                  </IngredientContainer>
                  <InstructionContainer>
                    <InstructionTitle>Instructions</InstructionTitle>
                    {post.recipeInstructionGroups.map((instructionGroup: RecipeInstructionGroup, index: number) => {
                      return (
                        <div style={{ paddingBottom: '30px' }} key={`instruction-group-${index}`}>
                          {instructionGroup.displayName && post.recipeInstructionGroups.length > 1 && (
                            <GroupTitle>{instructionGroup.displayName}</GroupTitle>
                          )}
                          {instructionGroup.instructions.map((instruction: RecipeInstruction, index: number) => {
                            step++
                            return (
                              <Instruction
                                id={`Step${step}`}
                                key={`instruction-${index}`}
                                dangerouslySetInnerHTML={{
                                  __html: instruction.instruction.childMarkdownRemark.rawMarkdownBody,
                                }}
                              ></Instruction>
                            )
                          })}
                        </div>
                      )
                    })}
                  </InstructionContainer>
                  <TagContainer className="col12">
                    <h3>Tags</h3>
                    <TagStyled>{post.mealType}</TagStyled>
                    {post.proteinType &&
                      post.proteinType.length > 0 &&
                      post.proteinType.map((proteinType: ProteinType, parentIndex: number) => {
                        return <TagStyled key={`tag=${parentIndex}`}>{proteinType.protein}</TagStyled>
                      })}
                    {post.vegetableType.map((vegetable: string, index: number) => {
                      return <TagStyled key={`tag-${index}`}>{vegetable}</TagStyled>
                    })}
                  </TagContainer>
                </div>
                <FeaturedSpacer>
                  <FeaturedContentRow {...recipeFeatures} />
                </FeaturedSpacer>
                <FeaturedSpacer>
                  <GeneralContentRow />
                </FeaturedSpacer>

                <Footer {...{ theme: HeaderTheme.DARK }} />
              </div>

              <div className="col2" />
            </div>

            <div className="row">
              <div className="col12"></div>
            </div>
          </div>
        </MainContainer>
      </Layout>
    )
  }
}

export default RecipeTemplate

export const pageQuery = graphql`
  query RecipeBySlug($slug: String) {
    contentfulRecipe(slug: { eq: $slug }) {
      bodyCopy {
        childMarkdownRemark {
          rawMarkdownBody
        }
      }
      createdAt
      heroImage {
        description
        file {
          details {
            image {
              height
              width
            }
          }
          url
        }
      }
      bannerImage {
        description
        file {
          details {
            image {
              height
              width
            }
          }
          url
        }
      }
      mealType
      proteinType {
        protein
      }
      slug
      title
      vegetableType
      recipeGroup {
        recipeGroupName
        ingredients {
          prep {
            prep
          }
          ingredient {
            ingredient
          }
          recipeQuantity {
            recipeQuantity {
              quantity {
                childMarkdownRemark {
                  rawMarkdownBody
                }
              }
            }
            recipeMeasurement {
              mesurement {
                childMarkdownRemark {
                  rawMarkdownBody
                }
              }
            }
          }
        }
        displayName
      }
      recipeInstructionGroups {
        recipeGroupName
        instructions {
          instruction {
            childMarkdownRemark {
              rawMarkdownBody
            }
          }
        }
        displayName
      }
    }
  }
`
