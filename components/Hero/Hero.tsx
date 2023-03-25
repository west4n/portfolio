import Link from 'next/link'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from '../BackgroundCircles/BackgroundCircles'
import Htag from '../HTag/Htag'

type Props = {}

interface IButtonMenu {
	name: string
	link: string
}

const buttonsMenu: IButtonMenu[] = [
	{ name: 'Обо мне', link: '#about' },
	// { name: 'Опыт', link: '#experience' },
	{ name: 'Навыки', link: '#skills' },
	{ name: 'Проекты', link: '#projects' },
	{ name: 'Связаться со мной', link: '#contacts' },
]

export default function Hero({}: Props) {
	const [text] = useTypewriter({
		words: [
			'Привет! Меня зовут Иван',
			'Hi! My name is Ivan',
			'Guy-who-loves-Coffee.tsx',
			'<ButLovesCodeMore />',
		],
		loop: true,
		delaySpeed: 2000,
	})

	return (
		<div className='flex h-screen flex-col items-center justify-center space-y-8 overflow-hidden text-center'>
			<BackgroundCircles />
			<img
				className='relative mx-auto h-32 w-32 rounded-full object-cover'
				src='./photo_main.jpg'
				alt='Main Photo'
			/>
			<div className='z-20'>
				<Htag tag='h2'>Web Developer</Htag>
				<Htag tag='h1'>
					<span className='mr-3'>{text}</span>
					<Cursor cursorColor='#F7AB0A' />
				</Htag>
				<div className='pt-5'>
					{buttonsMenu.map(({ name, link }) => (
						<Link href={link} key={link}>
							<button className='heroButton'>{name}</button>
						</Link>
					))}
				</div>
			</div>
		</div>
	)
}
