import { MetadataRoute } from "next"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseurl = process.env.URL

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
