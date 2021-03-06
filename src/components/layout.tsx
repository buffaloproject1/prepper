import React from 'react'
import Helmet from 'react-helmet'
import Container from './container'

interface Props {
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  children?: any
  /* eslint-enable  @typescript-eslint/no-explicit-any */
}

const Layout = ({ children }: Props) => {
  const gTag = `
    window.dataLayer = window.dataLayer || []
    function gtag() {
          dataLayer.push(arguments)
    }
    gtag("js", new Date());

    gtag("config", "UA-127393105-1");
  `

  return (
    <Container>
      <Helmet>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          name="description"
          content="Knife and Fish is a food and cocktail blog, from the midwest, with a focus on approachable meals and classic cocktails. Garden with confidence. Cook with passion. Enjoy your food. Create conversation.  Find recipes, search our encyclopedia of gardening and cooking tips and ingredients, watch food videos, and more."
        />
        <meta name="image" content="https://www.knifeandfish.com/logo.jpg" />
        <link rel="icon" href="logo.png" />
        <link rel="apple-touch-icon" href="logo.png"></link>
        <link
          rel="preconnect"
          crossOrigin="anonymous"
          href="https://fonts.googleapis.com/css?family=Roboto:300,600%7CPlayfair+Display&display=swap"
        ></link>
        {/* <link as="script" rel="preconnect" crossOrigin="anonymous" href="https://www.google-analytics.com"></link> */}

        <link rel="preconnect" href="https://www.googletagmanager.com"></link>
        <link rel="preconnect" href="https://knifeandfish.s3.amazonaws.com"></link>
        <script defer src="https://www.googletagmanager.com/gtag/js?id=UA-127393105-1"></script>
        <script>{gTag}</script>
        <meta name="msvalidate.01" content="07B97569BEA5E257BB3E40E122BF9908" />
        <meta name="p:domain_verify" content="1d4f38850b9eef24be5e9ee3b9f16617" />
        <meta name="google-site-verification" content="ngtQO_fG3A6wYz3plmefS8FzIJEmH3nst4HFYznyq_c" />

        <link rel="manifest" href="manifest.json"></link>

        <meta property="og:url" content="https://www.knifeandfish.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="A food and cocktail blog, from the Midwest" />
        <meta
          property="og:description"
          content="A food and cocktail blog, from the midwest, with a focus on approachable meals and classic cocktails."
        />
        <meta property="og:image" content="https://www.knifeandfish.com/logo.jpg" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="knifeandfisher1" />
        <meta name="twitter:site" content="knifeandfisher1" />
        <meta
          name="twitter:title"
          content="Knife and Fish is a food and cocktail blog, from the midwest, with a focus on approachable meals and classic cocktails."
        />
        <meta
          name="twitter:description"
          content="Knife and Fish is a food and cocktail blog, from the midwest, with a focus on approachable meals and classic cocktails. Garden with confidence. Cook with passion. Enjoy your food. Create conversation.  Find recipes, search our encyclopedia of gardening and cooking tips and ingredients, watch food videos, and more."
        />
        <meta name="twitter:image:src" content="https://www.knifeandfish.com/logo.jpg" />
        <meta
          name="twitter:image:alt"
          content="Knife and Fish is a food and cocktail blog, from the midwest, with a focus on approachable meals and classic cocktails."
        />
        <html lang="en" dir="ltr" />
      </Helmet>

      {children}
    </Container>
  )
}

export default Layout
