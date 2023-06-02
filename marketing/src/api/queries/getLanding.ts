import contentfulClient from '@/api/contentfulClient';
import { gql } from '@apollo/client';

export const landingCollection = gql`
query landingCollectionQuery {
  landingCollection {
    items {
      landingTitle
    }
  }
}
`;

export const getLanding = async () => (
  await contentfulClient.query<string>({
    query: landingCollection,
  })
);