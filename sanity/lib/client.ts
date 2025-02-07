import { createClient } from "next-sanity";
import { apiVersion, projectId, dataset } from "../env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  token: process.env.SANITY_API_READ_TOKEN,
  stega: {
    studioUrl: "/studio",
  },
});
