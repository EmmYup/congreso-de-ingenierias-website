import { graphql, useStaticQuery } from "gatsby"

const useAllSpeakers = () => {
  const {
    allContentfulSpeaker: { nodes },
  } = useStaticQuery(graphql`
    query allSpeakersQuery {
      allContentfulSpeaker(sort: { fields: createdAt, order: DESC }) {
        nodes {
          id
          name
          lastName
          jobTitle
          profilePicture {
            url
          }
        }
      }
    }
  `)
  return nodes
}

export default useAllSpeakers
