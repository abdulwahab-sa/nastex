import React from 'react';
import { MdPerson, MdEmail, MdPhone, MdShoppingCart, MdMessage, MdErrorOutline } from 'react-icons/md';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const Customorder = () => {
	// React Hook form in combination with Yup for validation schema

	const schema = yup.object().shape({
		fullName: yup.string().required(),
		email: yup.string().email().required(),
		phone: yup.number().positive().integer().required(),
		quantity: yup.number().positive().integer().required(),
		orderDetail: yup.string().required(),
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

	return (
		<div className="w-full h-full mt-14 p-2 overflow-hidden">
			<div className=" relative text-darkGray text-center my-6  mx-auto w-11/12 md:max-w-xl ">
				<div className="absolute inset-0 w-72 h-72 bg-lightRed rounded-full mix-blend-multiply filter blur-xl opacity-10 "></div>
				<div className="absolute bottom-0 right-0 w-72 h-72 bg-lightRed rounded-full mix-blend-multiply filter blur-xl opacity-10 "></div>

				<h2 className="text-xl md:text-3xl font-semibold">
					{' '}
					We've been waiting <br />
					for you.
				</h2>
				<span className="text-sm md:text-lg">We want to hear from you. Let us know how we can help.</span>
				<div className="relative mt-2 flex flex-col justify-center items-center w-full py-10">
					<form onSubmit={handleSubmit(onSubmit)} className="relative md:w-8/12">
						<div className="absolute h-16 w-16 left-12 bottom-0 bg-darkRed rounded-xl opacity-10 rotate-45  "></div>
						<div className="absolute h-16 w-16 -right-4 top-1/4  bg-darkRed rounded-full opacity-10 rotate-45  "></div>
						<div className="absolute h-20 w-14 rounded-full -inset-6  bg-darkRed  opacity-10 rotate-45  "></div>

						<div className="relative  my-2 ">
							<MdPerson className="text-stone-500 absolute text-md z-20 inset-3 " />
							<input
								type="text"
								className=" w-full py-3 px-9 text-sm font-light bg-stone-100 rounded-sm focus:drop-shadow-lg outline-0"
								placeholder="Enter your name"
								{...register('fullName')}
							/>
							{errors.fullName && <MdErrorOutline className="text-lightRed absolute text-md z-20 top-2 -right-5 " />}
						</div>
						<div className="relative  my-2">
							<MdEmail className="text-stone-500 absolute z-20 text-md inset-3" />
							<input
								type="email"
								className="w-full py-3 px-9 text-sm font-light bg-stone-100 rounded-sm focus:drop-shadow-lg outline-0"
								placeholder="Enter your email"
								{...register('email')}
							/>
							{errors.email && <MdErrorOutline className="text-lightRed absolute text-md z-20 top-2 -right-5 " />}
						</div>
						<div className="relative  my-2">
							<MdPhone className="text-stone-500 absolute z-20 text-md inset-3" />
							<input
								type="tel"
								className="w-full py-3 px-9 text-sm font-light bg-stone-100 rounded-sm focus:drop-shadow-lg outline-0"
								placeholder="Enter your phone"
								{...register('phone')}
							/>
							{errors.phone && <MdErrorOutline className="text-lightRed absolute text-md z-20 top-2 -right-5 " />}
						</div>
						<div className="relative  my-2">
							<MdShoppingCart className="text-stone-500 absolute z-20 text-md inset-3" />
							<input
								type="number"
								className="w-full py-3 px-9 text-sm font-light bg-stone-100 rounded-sm focus:drop-shadow-lg outline-0 "
								placeholder="Required quantity"
								{...register('quantity')}
							/>
							{errors.quantity && <MdErrorOutline className="text-lightRed absolute text-md z-20 top-2 -right-5 " />}
						</div>
						<div className="relative  my-2">
							<MdMessage className="text-stone-500 absolute z-20 text-md inset-3" />
							<textarea
								cols="30"
								rows="4"
								className="w-full py-3 px-9 text-sm font-light bg-stone-100 rounded-sm focus:drop-shadow-lg outline-0"
								placeholder="Enter your order details"
								{...register('orderDetail')}
							></textarea>
							{errors.orderDetail && <MdErrorOutline className="text-lightRed absolute text-md z-20 top-2 -right-5 " />}
						</div>
						<input
							type="submit"
							value="Send Inquiry"
							className="cursor-pointer text-sm font-semibold my-3 bg-red-400 text-neutral-50 p-3 rounded-md hover:bg-red-500 transition-all z-40"
						/>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Customorder;
