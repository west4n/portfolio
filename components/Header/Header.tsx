import { Social } from '@/typings'
import { motion } from 'framer-motion'
import { SocialIcon } from 'react-social-icons'

type Props = {
	socials: Social[]
}

const socialItemsUrl: string[] = [
	't.me',
	'instagram.com',
	'facebook.com',
	'github.com',
	'linkedin.com',
]

export default function Header({ socials }: Props) {
	return (
		<header className='sticky top-0 z-20 mx-auto flex max-w-7xl items-start justify-between p-5 xl:items-center'>
			<motion.div
				initial={{
					x: -500,
					opacity: 0,
					scale: 0.5,
				}}
				animate={{
					x: 0,
					opacity: 1,
					scale: 1,
				}}
				transition={{
					duration: 1.5,
				}}
				className='flex flex-row items-center'
			>
				{socials.map((s) => (
					<SocialIcon
						key={s._id}
						url={s.url}
						fgColor='gray'
						bgColor='transparent'
						style={{
							height: 40,
							width: 40,
						}}
					/>
				))}
			</motion.div>

			<motion.div
				initial={{
					x: 500,
					opacity: 0,
					scale: 0.5,
				}}
				animate={{
					x: 0,
					opacity: 1,
					scale: 1,
				}}
				transition={{
					duration: 1.5,
				}}
				className='flex cursor-pointer flex-row items-center text-gray-300'
			>
				<SocialIcon
					className='cursor-pointer'
					network='email'
					fgColor='gray'
					bgColor='transparent'
					style={{
						height: 40,
						width: 40,
					}}
				/>

				<p className='hidden text-sm uppercase text-gray-400 md:inline-flex'>
					Get in touch
				</p>
			</motion.div>
		</header>
	)
}
