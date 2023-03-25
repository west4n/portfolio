import { GetStaticProps } from 'next'
import Head from 'next/head'

import About from '@/components/About/About'
import Contacts from '@/components/Contacts/Contacts'
import Header from '@/components/Header/Header'
import Hero from '@/components/Hero/Hero'
import Projects from '@/components/Projects/Projects'
import Skills from '@/components/Skills/Skills'
import { PageInfo, Project, Skill, Social } from '@/typings'
import { fetchPageInfo } from '@/utils/fetchPageInfo'
import { fetchProject } from '@/utils/fetchProjects'
import { fetchSkills } from '@/utils/fetchSkills'
import { fetchSocial } from '@/utils/fetchSocials'
import { ChevronUpIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

type Props = {
	pageInfo: PageInfo
	skills: Skill[]
	socials: Social[]
	projects: Project[]
}

const Home = ({ skills, pageInfo, projects, socials }: Props) => {
	return (
		<div className='z-0 h-screen snap-y snap-mandatory overflow-x-hidden overflow-y-scroll bg-[rgb(36,36,36)] text-white scrollbar-thin scrollbar-track-gray-400/10 scrollbar-thumb-[#F7AB0A]/80'>
			<Head>
				<title>Create Next App</title>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Header socials={socials} />

			<section id='hero' className='snap-start'>
				<Hero />
			</section>

			<section id='about' className='snap-center'>
				<About pageInfo={pageInfo} />
			</section>

			{/* Experience */}

			<section id='skills' className='snap-start'>
				<Skills skills={skills} />
			</section>

			<section id='projects' className='snap-start'>
				<Projects projects={projects} />
			</section>

			<section id='contacts' className='snap-start'>
				<Contacts />
			</section>

			<Link href='#hero'>
				<footer className='sticky bottom-5 w-full cursor-pointer'>
					<div className='flex items-center justify-center'>
						<div className='flex h-10 w-10 items-center justify-center rounded-full bg-[#F7AB0A] grayscale filter hover:grayscale-0'>
							<ChevronUpIcon className='fliter h-5 w-5 text-black' />
						</div>
					</div>
				</footer>
			</Link>
		</div>
	)
}

export default Home

export const getStaticProps: GetStaticProps<Props> = async () => {
	const skills: Skill[] = await fetchSkills()
	const pageInfo: PageInfo = await fetchPageInfo()
	const projects: Project[] = await fetchProject()
	const socials: Social[] = await fetchSocial()

	return {
		props: {
			skills,
			pageInfo,
			projects,
			socials,
		},
		revalidate: 10,
	}
}
