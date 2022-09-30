import { createClient } from 'contentful';
import { IProduct } from '../@types/generated/contentful.types';

const contentfulClient = () => {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || '',
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || '',
    host: process.env.NEXT_PUBLIC_CONTENTFUL_HOST,
  });
  const getProducts = async () => {
    try {
      const entries = await client.getEntries({
        content_type: 'product',
      });
      const sanitizedEntries = entries.items.map((item: IProduct) => {
        return { ...item.fields, id: item.sys.id };
      });
      return sanitizedEntries;
    } catch (error) {
      console.log(`Error fetching Products: ${error}`);
    }
  };
  return { getProducts };
};

export default contentfulClient;
