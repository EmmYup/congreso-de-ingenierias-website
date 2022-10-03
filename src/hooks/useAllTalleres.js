import { graphql, useStaticQuery } from "gatsby"

const useAllTalleres = () => {
  const {
    allContentfulEvent: { nodes },
  } = useStaticQuery(graphql`
    query allTalleresQuery {
      allContentfulEvent(
        filter: {
          eventType: { id: { eq: "1a68caf0-7108-5c11-8060-5f8cbbddc733" } }
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

export default useAllTalleres
