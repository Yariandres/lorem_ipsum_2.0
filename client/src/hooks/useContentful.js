import { createClient } from "contentful";

const useContentful = () => {
  const client = createClient({
    space: "ly0y8ll3zo25",
    accessToken: "L-dg3HENU__e6R6WUeM_y3M6THTxGHD301rNkMOflW8",
    host: "preview.contentful.com",
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
