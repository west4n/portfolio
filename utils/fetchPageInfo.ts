import { PageInfo } from '@/typings'
import { groq } from 'next-sanity'
import { sanityClient } from './../sanity'

export const fetchPageInfo = async () => {
	const query = groq`
		*[_type == 'pageInfo'][0]
	`

	const res = await sanityClient.fetch(query)

	const pageInfo: PageInfo = res

	return pageInfo
}
