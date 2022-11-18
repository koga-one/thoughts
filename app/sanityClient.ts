import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "vl490xep",
  dataset: "production",
  apiVersion: "2022-11-16",
  useCdn: false,
});
