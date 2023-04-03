import React from 'react';
import { MdLocationOn, MdEmail, MdPhoneEnabled, MdErrorOutline, MdPerson, MdMessage } from 'react-icons/md';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

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
		console.log(data);
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
			detail: '92-312-8230803',
		},
		{
			id: 3,
			icon: MdEmail,
			title: 'Email',
			detail: 'info@pentagomfgcorp.com',
		},
	];
	return (
		<div className="w-full h-full text-darkGray">
			<div className="mt-20 flex flex-col items-center md:flex-row md:justify-around">
				<div className="px-4 md:px-16 md:w-1/2">
					<h2 className="text-xl md:text-2xl font-semibold">Get in Touch with us</h2>
					<p className="text-sm md:text-md mt-1">
						You can get in touch on our email or via phone. Or you can fill out our contact form and our team will reach out to you.
					</p>
					{contactDetail.map((el) => {
						return (
							<div className="mt-6 flex items-center " key={el.id}>
								<div className="bg-red-800 text-gray-50 w-12 h-10 md:w-10 md:h-8 p-3 rounded-lg flex justify-center items-center">
									<el.icon className="text-2xl" />
								</div>
								<div className="ml-6 ">
									<h2 className="text-md font-semibold">{el.title}</h2>
									<span className="text-sm font-medium text-gray-600">{el.detail}</span>
								</div>
							</div>
						);
					})}
				</div>
				<div className="bg-red-800 p-6 rounded-md mt-10 md:m-0 w-10/12 md:w-2/5">
					<form onSubmit={handleSubmit(onSubmit)} className="relative">
						<div className="relative  my-2">
							<MdPerson className="text-stone-500 absolute text-xs z-20 inset-2 " />
							<input
								type="text"
								className=" w-full py-2 px-8 text-xs font-light bg-stone-100 rounded-sm focus:drop-shadow-lg outline-0"
								placeholder="Enter your name"
								{...register('fullName')}
							/>
							{errors.fullName && <MdErrorOutline className="text-lightRed absolute text-md z-20 top-2 -right-5 " />}
						</div>
						<div className="relative  my-2">
							<MdEmail className="text-stone-500 absolute z-20 text-xs inset-2" />
							<input
								type="email"
								className="w-full py-2 px-8 text-xs font-light bg-stone-100 rounded-sm focus:drop-shadow-lg outline-0"
								placeholder="Enter your email"
								{...register('email')}
							/>
							{errors.email && <MdErrorOutline className="text-lightRed absolute text-md z-20 top-2 -right-5 " />}
						</div>

						<div className="relative  my-2">
							<MdMessage className="text-stone-500 absolute z-20 text-xs inset-2" />
							<textarea
								cols="30"
								rows="4"
								className="w-full py-2 px-8 text-xs font-light bg-stone-100 rounded-sm focus:drop-shadow-lg outline-0"
								placeholder="Enter your order details"
								{...register('message')}
							></textarea>
							{errors.message && <MdErrorOutline className="text-lightRed absolute text-md z-20 top-2 -right-5 " />}
						</div>
						<input
							type="submit"
							value="Send Message"
							className="cursor-pointer w-full text-xs my-3 bg-red-400 text-neutral-50 p-2 rounded-md hover:bg-red-500 transition-all z-40"
						/>
					</form>
				</div>
			</div>
		</div>
	);
};
