import * as React from "react"
import { Link } from "gatsby"
import useAllSpeakers from "../hooks/use-all-speakers"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import HeroSection from "../components/herosection"
import SectionLayout from "../components/sectionlayout"
import SpeakerCard from "../components/cards/speaker"
import CategoryCard from "../components/cards/category"
import Quote from "../components/quote"
import ImageCard from "../components/cards/image"
import Stats from "../components/stats"

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

const contests = [
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
const contestSectionProps = {
  title: "NUESTRAS COMPETENCIAS",
  subtitle: "",
}

const IndexPage = () => {
  const speakers = useAllSpeakers().slice(0, 6)
  return (
    <Layout>
      <Seo title="Home" />
      <HeroSection />
      <Stats />
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
      <Quote />
      <SectionLayout {...contestSectionProps}>
        {contests.map(contest => (
          <ImageCard {...contest} />
        ))}
      </SectionLayout>
    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
