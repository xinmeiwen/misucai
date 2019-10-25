import React from "react"

// TODO: Why aren't these resolving?
/* eslint-disable import/no-unresolved */
import Layout from "@narative/gatsby-theme-novela/src/components/Layout"
import Section from "@narative/gatsby-theme-novela/src/components/Section"
import Seo from "@narative/gatsby-theme-novela/src/components/SEO"
import Headings from "@narative/gatsby-theme-novela/src/components/Headings"
/* eslint-enable import/no-unresolved */

const NotFoundPage = () => (
  <Layout>
    <Seo />
    <Section>
      <div style={{ marginTop: `100px` }}>
        <Headings.h1>404: Page Not Found</Headings.h1>
      </div>
    </Section>
  </Layout>
)

export default NotFoundPage
