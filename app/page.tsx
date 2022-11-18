import { createClient } from "next-sanity";

const client = createClient({
  projectId: "vl490xep",
  dataset: "production",
  apiVersion: "2022-11-16",
  useCdn: false,
});

export default async function Page() {
  const data = await client.fetch(`*[_type == "folder"][0]`);
  console.log(data);

  return <div className="m-1 grid grid-cols-12"></div>;
}
