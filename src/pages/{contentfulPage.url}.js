// src/pages/{contentfulPage.url}.js

import React from 'react';
import { graphql } from 'gatsby';

const Page = ({ data }) => {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
};

export const data = graphql`
  query pageQuery($id: String) {
    contentfulPage(id: { eq: $id }) {
      url
      title
      description {
        description
      }
    }
  }
`;

export default Page;
