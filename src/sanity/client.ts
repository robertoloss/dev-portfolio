import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import { Picture } from './sanity-types'


export const client = createClient({
  projectId: 'i3j6s8ke',
  dataset: 'production',
  useCdn: false,
	apiVersion: '2023-05-03',
})


const builder = imageUrlBuilder(client) 
export function urlFor(source: Picture["image"] | undefined) {
	if (source) {
			return builder.image(source)
	}
} 

export async function getWebsiteInfo() {
  return await client.fetch(
    `*[_type == "website"]`,
  )
}

export async function getAllProjects() {
	return await client.fetch(
		`*[_type == "project"]`
	)
}

export async function getProject(slug:string) {
	return await client.fetch(
		`*[_type == "project" && slug == "${slug}"]`
	)
}
