// src/pages/{contentfulPage.url}.js

import React from 'react';
import { graphql } from 'gatsby';

const Page = ({ data }) => {
  return (
    <main>
      <h1>{data.contentfulPage.title}</h1>
      <p>{data.contentfulPage.description.description}</p>
    </main>
  );
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
