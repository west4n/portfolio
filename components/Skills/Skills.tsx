import { Skill } from '@/typings'
import { motion } from 'framer-motion'
import Htag from '../HTag/Htag'
import MySkill from '../Skill/MySkill'

type Props = {
	skills: Skill[]
}

export default function Skills({ skills }: Props) {
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
			className='relative mx-auto flex min-h-screen max-w-[2000px] flex-col items-center justify-center text-center md:text-left xl:flex-row xl:space-y-0 xl:px-10'
		>
			<Htag tag='h3'>Skills</Htag>

			<h3 className='absolute top-36 text-sm uppercase tracking-[3px] text-gray-500'>
				Наведите курсор на навык для получения информации
			</h3>

			<div className='grid grid-cols-4 gap-5'>
				{skills?.slice(0, skills.length / 2).map((skill) => (
					<MySkill key={skill._id} skill={skill} />
				))}
				{skills?.slice(skills.length / 2, skills.length).map((skill) => (
					<MySkill key={skill._id} skill={skill} directionLeft />
				))}
			</div>
		</motion.div>
	)
}
