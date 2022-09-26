import { createClient, Entry, FieldItem } from "contentful";

const contentfulClient = () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID || "",
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
    host: process.env.CONTENTFUL_HOST,
  });
  const getProducts = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "product",
      });
      const sanitizedEntries = entries.items.map((item: Entry<FieldItem>) => {
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
