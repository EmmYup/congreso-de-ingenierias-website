import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import HeroSection from "../components/herosection"
import SectionLayout from "../components/sectionlayout"
import SpeakerCard from "../components/cards/speaker"
import CategoryCard from "../components/cards/category"

const categories = [
  {
    imageUrl: "https://flowbite.com/docs/images/blog/image-1.jpg",
    url: "#",
  },
  {
    imageUrl: "https://flowbite.com/docs/images/blog/image-1.jpg",
    url: "#",
  },
  {
    imageUrl: "https://flowbite.com/docs/images/blog/image-1.jpg",
    url: "#",
  },
  {
    imageUrl: "https://flowbite.com/docs/images/blog/image-1.jpg",
    url: "#",
  },
]

const speakers = [
  {
    imageUrl: "https://dummyimage.com/80x80/edf2f7/a5afbd",
    fullName: "Holden Caulfield",
    jobTitle: "UI Designer",
  },
  {
    imageUrl: "https://dummyimage.com/80x80/edf2f7/a5afbd",
    fullName: "Henry Letham",
    jobTitle: "UI Designer",
  },
  {
    imageUrl: "https://dummyimage.com/80x80/edf2f7/a5afbd",
    fullName: "Holden Caulfield",
    jobTitle: "CTO",
  },
  {
    imageUrl: "https://dummyimage.com/80x80/edf2f7/a5afbd",
    fullName: "Oskar Blinde",
    jobTitle: "Founder",
  },
  {
    imageUrl: "https://dummyimage.com/80x80/edf2f7/a5afbd",
    fullName: "Atticus Finch",
    jobTitle: "QA Engineer",
  },
  {
    imageUrl: "https://dummyimage.com/80x80/edf2f7/a5afbd",
    fullName: "Alper Kamu",
    jobTitle: "UX Engineer",
  },
]

const speakerSectionProps = {
  title: "Conoce a nuestros ponentes",
  subtitle:
    "Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.",
}

const categorySectionProps = {
  title: "Explora las ingenierías",
  subtitle:
    "Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.",
}

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <HeroSection />
    <SectionLayout {...speakerSectionProps}>
      {speakers.map(speaker => (
        <SpeakerCard {...speaker} />
      ))}
    </SectionLayout>
    <SectionLayout {...categorySectionProps}>
      {categories.map(category => (
        <CategoryCard {...category} />
      ))}
    </SectionLayout>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
