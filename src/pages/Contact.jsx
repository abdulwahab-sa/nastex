import React from 'react';
import { MdLocationOn, MdEmail, MdPhoneEnabled, MdErrorOutline, MdPerson, MdMessage } from 'react-icons/md';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import emailjs from '@emailjs/browser';

export const Contact = () => {
	const schema = yup.object().shape({
		fullName: yup.string().required(),
		email: yup.string().email().required(),
		message: yup.string().required(),
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = (data) => {
		emailjs.sendForm('service_hdv0oa6', 'template_nilj2st', data, 'Pp6OX7szD7ZRI4tHH').then(
			(result) => {
				console.log(result.text);
			},
			(error) => {
				console.log(error.text);
			}
		);
	};

	const contactDetail = [
		{
			id: 1,
			icon: MdLocationOn,
			title: 'Our Location',
			detail: 'Sialkot 51310, Pakistan',
		},
		{
			id: 2,
			icon: MdPhoneEnabled,
			title: 'Phone',
			detail: '92-316-7133715',
		},
		{
			id: 3,
			icon: MdEmail,
			title: 'Email',
			detail: 'info@pentagomfgcorp.com',
		},
	];
	return (
		<div className="font-montserrat my-20 w-full h-full text-darkGray overflow-hidden">
			<div className=" px-4 md:px-10 flex flex-col items-center md:flex-row md:justify-evenly">
				<div className=" md:w-1/2">
					<h2 className="text-xl md:text-3xl font-semibold">Get in Touch with us</h2>
					<p className="text-sm md:text-md mt-1">
						You can get in touch on our email or via phone. Or you can fill out our contact form and our team will reach out to you.
					</p>
					{contactDetail.map((el) => {
						return (
							<div className="mt-6 flex items-center " key={el.id}>
								<div className="bg-stone-600 text-orange-500 w-12 h-10 md:w-14 md:h-12 p-3 rounded-lg flex justify-center items-center">
									<el.icon className="text-2xl" />
								</div>
								<div className="ml-6 ">
									<h2 className="text-sm md:text-md font-semibold">{el.title}</h2>
									<span className="text-xs md:text-sm font-medium text-gray-600">{el.detail}</span>
								</div>
							</div>
						);
					})}
				</div>
				<div className="bg-stone-600 p-6 rounded-md mt-10 md:m-0 w-10/12 md:w-2/5 max-w-sm shadow-md">
					<form onSubmit={handleSubmit(onSubmit)} className="relative">
						<div className="relative  my-2">
							<MdPerson className="text-stone-500 absolute text-md z-20 inset-3 " />
							<input
								type="text"
								className=" w-full py-3 px-9 text-xs font-light bg-stone-100 rounded-sm focus:drop-shadow-lg outline-0"
								placeholder="Enter your name"
								{...register('fullName')}
							/>
							{errors.fullName && <MdErrorOutline className="text-lightRed absolute text-md z-20 top-2 -right-5 " />}
						</div>
						<div className="relative  my-2">
							<MdEmail className="text-stone-500 absolute z-20 text-md inset-3" />
							<input
								type="email"
								className="w-full py-3 px-9 text-xs font-light bg-stone-100 rounded-sm focus:drop-shadow-lg outline-0"
								placeholder="Enter your email"
								{...register('email')}
							/>
							{errors.email && <MdErrorOutline className="text-lightRed absolute text-md z-20 top-2 -right-5 " />}
						</div>

						<div className="relative  my-2">
							<MdMessage className="text-stone-500 absolute z-20 text-md inset-3" />
							<textarea
								cols="30"
								rows="4"
								className="w-full py-3 px-9 text-xs font-light bg-stone-100 rounded-sm focus:drop-shadow-lg outline-0"
								placeholder="Enter your message"
								{...register('message')}
							></textarea>
							{errors.message && <MdErrorOutline className="text-lightRed absolute text-md z-20 top-2 -right-5 " />}
						</div>
						<input
							type="submit"
							value="Send Message"
							className="cursor-pointer w-full text-xs my-3 bg-orange-400 text-neutral-50 p-2 rounded-md hover:bg-red-500 transition-all z-40"
						/>
					</form>
				</div>
			</div>
		</div>
	);
};
