import contentfulClient from '@/api/contentfulClient';
import { gql } from '@apollo/client';

export const landingCollection = gql`
query landingCollectionQuery {
  landingCollection {
    items {
      sys {
        id
      }
    }
  }
}
`;

export const getLanding = async () => {
  const result = await contentfulClient.query({
    query: landingCollection,
  });
    
  return result;
}