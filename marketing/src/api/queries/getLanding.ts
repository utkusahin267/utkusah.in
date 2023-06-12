import { gql } from '@apollo/client';

import contentfulClient from '@/api/contentfulClient';

export const landingCollection = gql`
  query landingCollectionQuery {
    landingCollection {
      items {
        landingTitle
      }
    }
  }
`;

export const getLanding = async () =>
  await contentfulClient.query<string>({
    query: landingCollection,
  });
