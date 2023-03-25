import { urlFor } from '@/sanity'
import { PageInfo } from '@/typings'
import { motion } from 'framer-motion'
import Htag from '../HTag/Htag'

type Props = {
	pageInfo: PageInfo
}

export default function About({ pageInfo }: Props) {
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
			className='relative mx-auto flex h-screen max-w-7xl flex-col items-center justify-evenly px-10 text-center md:flex-row md:text-left'
		>
			<Htag tag='h3'>About</Htag>
			<motion.img
				initial={{
					x: -200,
					opacity: 0,
				}}
				transition={{
					duration: 1.2,
				}}
				whileInView={{
					x: 0,
					opacity: 1,
				}}
				viewport={{
					once: true,
				}}
				src={urlFor(pageInfo?.profilePic).url()}
				alt='Main Photo'
				className='md:h-95 mt-32 h-56 w-56 flex-shrink-0 rounded-full object-cover md:w-64 md:rounded-lg xl:h-[500px] xl:w-[500px]'
			/>

			<div className='space-y-10 px-0 md:px-10'>
				<Htag tag='h4'>
					<span className='underline decoration-[#F7AB0A]/50'>Немного</span>{' '}
					информации обо мне 😉{' '}
				</Htag>
				<p className='text-justify'>
					Привет 👋! Меня зовут <strong className='text-[#F7AB0A]'>Иван</strong>{' '}
					и я <strong className='text-[#F7AB0A]'>Web Developer</strong>.
					Специализируюсь на{' '}
					<strong className='text-[#F7AB0A]'>
						HTML, CSS, JavaScript, TypeScript
					</strong>
					. Обладаю глубоким пониманием передовых технологий в веб-разработке. Я
					использую в своей работе такие фреймворки как{' '}
					<strong className='text-[#F7AB0A]'>React</strong> и{' '}
					<strong className='text-[#F7AB0A]'>NextJS</strong> для создания
					высокопроизводительных, масштабируемых и удобных веб-сайтов, которые
					привлекают посетителей. Моя страсть - это создание индивидуальных
					веб-решений, которые соответствуют целям и фирменному стилю моих
					клиентов. Если вы хотите создать отзывчивый сайт с нуля с точки зрения
					производительности и удобства использования, то я обладаю достаточным
					опытом, чтобы помочь вам добиться успеха. Свяжитесь со мной сегодня,
					чтобы узнать, как я могу помочь вам достичь ваших целей!
				</p>
			</div>
		</motion.div>
	)
}
