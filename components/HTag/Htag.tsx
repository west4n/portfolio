import { IHTag } from './HTag.props'

export default function Htag({ children, tag, ...props }: IHTag): JSX.Element {
	switch (tag) {
		case 'h1':
			return (
				<h1 className='px-10 text-5xl font-semibold lg:text-6xl' {...props}>
					{children}
				</h1>
			)
		case 'h2':
			return (
				<h2
					className='pb-2 text-sm uppercase tracking-[15px] text-gray-500'
					{...props}
				>
					{children}
				</h2>
			)
		case 'h3':
			return (
				<h3
					className='absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500'
					{...props}
				>
					{children}
				</h3>
			)
		case 'h4':
			return (
				<h4 className='text-4xl font-semibold' {...props}>
					{children}
				</h4>
			)
		default:
			return <></>
	}
}
