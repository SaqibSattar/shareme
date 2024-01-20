// Import the named export `createClient` instead of the default export
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: import.meta.env.VITE_REACT_APP_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '1',
  useCdn: true,
  token: import.meta.env.VITE_REACT_APP_SANITY_TOKEN
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
