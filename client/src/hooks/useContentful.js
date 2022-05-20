import { createClient } from "contentful";

const useContentful = () => {
  const client = createClient({
    space: process.env.REACT_APP_SPACE,
    accessToken: process.env.REACT_APP_ACCESS_TOKEN,
    host: process.env.REACT_APP_HOST,
  });

  const getContent = async () => {
    try {
      const entries = await client.getEntries();

      const sanitizedEntries = entries.items.map((item) => {
        const image = item.fields.image;
        const name = item.fields.name;
        return { image, name };
      });

      return sanitizedEntries;
    } catch (error) {
      console.log("Errror getting content", error);
    }
  };

  return { getContent };
};

export default useContentful;
