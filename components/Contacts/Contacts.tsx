import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/solid'
import { SubmitHandler, useForm } from 'react-hook-form'

import Htag from '../HTag/Htag'

type Inputs = {
	name: string
	email: string
	subject: string
	message: string
}

type Props = {}

export default function Contacts({}: Props) {
	const { register, handleSubmit } = useForm<Inputs>()
	const onSubmit: SubmitHandler<Inputs> = (formData) => {
		window.location.href = `mailto:iskurskiii@gmail.com?subject=${formData.subject}&body=Привет, меня зовут ${formData.name}. ${formData.message}. (${formData.email})`
	}

	return (
		<div className='relative mx-auto flex h-screen max-w-7xl flex-col items-center justify-evenly px-10 text-center md:flex-row md:text-left'>
			<Htag tag='h3'>Contact</Htag>

			<div className='flex flex-col space-y-10'>
				<Htag tag='h4'>
					<span className='underline decoration-[#F7AB0A]/50'>
						Свяжитесь со мной
					</span>{' '}
					и мы обсудим все детали
				</Htag>

				<div className='space-y-6'>
					<div className='flex items-center justify-center space-x-5'>
						<PhoneIcon className='h-7 w-7 animate-pulse text-[#F7AB0A]' />
						<p className='text-2xl'>+375333620788</p>
					</div>

					<div className='flex items-center justify-center space-x-5'>
						<EnvelopeIcon className='h-7 w-7 animate-pulse text-[#F7AB0A]' />
						<p className='text-2xl'>iskurskiii@gmail.com</p>
					</div>
				</div>

				<form
					onSubmit={handleSubmit(onSubmit)}
					className='mx-auto flex w-fit flex-col space-y-2'
				>
					<div className='flex space-x-2'>
						<input
							{...register('name')}
							placeholder='Имя'
							className='contactInput'
							type='text'
						/>
						<input
							{...register('email')}
							placeholder='Email'
							className='contactInput'
							type='email'
						/>
					</div>

					<input
						{...register('subject')}
						placeholder='Тема'
						className='contactInput'
						type='text'
					/>

					<textarea
						{...register('message')}
						placeholder='Сообщение'
						className='contactInput'
					/>

					<button
						type='submit'
						className='rounded-md bg-[#F7AB0A] py-5 px-10 text-lg font-bold text-black'
					>
						Отправить
					</button>
				</form>
			</div>
		</div>
	)
}
