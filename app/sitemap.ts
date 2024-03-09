import { MetadataRoute } from "next"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseurl = process.env.url
    ? `${process.env.url}`
    : "http://localhost:3000" // use the dev server port

  return [
    {
      url: `${baseurl}/`,
    },
    {
      url: `${baseurl}/usluge`,
    },
    {
      url: `${baseurl}/eu-projekti`,
    },
  ]
}
