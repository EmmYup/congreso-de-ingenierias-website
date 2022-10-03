import { graphql, useStaticQuery } from "gatsby"

const useAllProjectTypes = () => {
  const {
    allContentfulProjectType: { nodes },
  } = useStaticQuery(graphql`
    query allProjectTypesQuery {
      allContentfulProjectType {
        nodes {
          id
          name
          image {
            url
          }
        }
      }
    }
  `)
  return nodes
}

export default useAllProjectTypes
