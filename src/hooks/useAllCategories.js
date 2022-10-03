import { graphql, useStaticQuery } from "gatsby"

const useAllCategories = () => {
  const {
    allContentfulCategory: { nodes },
  } = useStaticQuery(graphql`
    query allCategoriesQuery {
      allContentfulCategory {
        nodes {
          id
          name
          url
          imageUrl {
            url
          }
        }
      }
    }
  `)
  return nodes
}

export default useAllCategories
