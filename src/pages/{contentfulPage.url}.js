import React from 'react';
import { graphql } from 'gatsby';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Page = ({ data }) => {
  return (
    <main>
      <h1>{data.contentfulPage.title}</h1>
      <p>{data.contentfulPage.description.description}</p>
      <Button color='danger'>Danger!</Button>
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
