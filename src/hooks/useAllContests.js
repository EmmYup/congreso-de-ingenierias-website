import { graphql, useStaticQuery } from "gatsby"

const useAllContests = () => {
  const {
    allContentfulEvent: { nodes },
  } = useStaticQuery(graphql`
    query allContestsQuery {
      allContentfulEvent(
        filter: {
          eventType: { id: { eq: "484d431f-c34b-506b-b2ab-5c3d9f8f429f" } }
        }
      ) {
        edges {
          node {
            id
            image {
              url
            }
            name
          }
        }
      }
    }
  `)
  return nodes
}

export default useAllContests
