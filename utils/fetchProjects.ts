import { Project } from '@/typings'
import { groq } from 'next-sanity'
import { sanityClient } from './../sanity'

export const fetchProject = async () => {
	const query = groq`
		*[_type == 'project'] {
			...,
			technologies[]->
		}
	`

	const res = await sanityClient.fetch(query)

	const projects: Project[] = res

	return projects
}
