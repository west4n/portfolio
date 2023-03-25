import { urlFor } from '@/sanity'
import { Project } from '@/typings'
import { motion } from 'framer-motion'

import Htag from '../HTag/Htag'

type Props = {
	projects: Project[]
}

export default function Projects({ projects }: Props) {
	return (
		<motion.div
			initial={{
				opacity: 0,
			}}
			whileInView={{
				opacity: 1,
			}}
			transition={{
				duration: 1.5,
			}}
			className='relative z-0 mx-auto flex h-screen max-w-full flex-col items-center justify-evenly overflow-hidden text-left md:flex-row'
		>
			<Htag tag='h3'>Projects</Htag>

			<div className='relative z-20 flex w-full snap-x snap-mandatory overflow-y-hidden overflow-x-scroll scrollbar-thin scrollbar-track-gray-400/10 scrollbar-thumb-[#F7AB0A]/80'>
				{projects?.map((p, i) => (
					<div
						key={p._id}
						className='flex h-screen w-screen flex-shrink-0 snap-center flex-col items-center justify-center space-y-5 p-20 md:p-44'
					>
						<motion.img
							initial={{ opacity: 0, y: -300 }}
							transition={{ duration: 1.2 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							src={urlFor(p?.image).url()}
							alt='projects'
						/>

						<div className='flex items-center justify-center space-x-2'>
							{p?.technologies.map((t) => (
								<img
									className='h-10 w-10'
									key={t._id}
									src={urlFor(t.image).url()}
									alt={t.title}
								/>
							))}
						</div>

						<div className='max-w-6xl space-y-10 px-0 md:px-10'>
							<Htag tag='h4' className='text-center text-4xl font-semibold'>
								<span className='underline decoration-[#F7AB0A]/50'>
									Case study {i + 1} of {projects.length}:
								</span>{' '}
								{p?.title}
							</Htag>

							<p className='text-justify text-lg md:text-left'>{p.summary}</p>
						</div>
					</div>
				))}
			</div>

			<div className='absolute top-[30%] left-0 h-[500px] w-full -skew-y-12 bg-[#F7AB0A]/10'></div>
		</motion.div>
	)
}
