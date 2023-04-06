import React, { useState, useEffect } from 'react';
import { FaArrowCircleRight, FaAngleDown, FaAngleUp, FaEnvelopeOpen, FaWhatsapp, FaMapMarkerAlt, FaPlus } from 'react-icons/fa';
import streetwearImg from './../images/streetwear.jpg';
import activewearImg from './../images/activewear.jpg';
import teamwearImg from './../images/teamwear.jpg';
import cart from './../assets/cart.svg';
import time from './../assets/time.svg';
import clients from './../assets/clients.svg';
import blobImg from './../images/blob-scene.svg';
import cartTrolley from './../assets/cart-trolley.svg';
import check from './../assets/check.svg';
import order from './../assets/order.svg';
import tshirt from './../assets/tshirt.svg';
import quality from './../assets/quality.svg';
import grow from './../assets/grow.svg';
import cover from './../images/pentago_cover.jpg';
import { motion } from 'framer-motion';

const homeData = [
	{
		id: 1,
		img: order,
		title: 'Ease of Ordering',
		desc: 'We have created a seamless sourcing experience for your brand, free of any unnecessary difficulties or complications.',
	},
	{
		id: 2,
		img: tshirt,
		title: 'Sample & Mockups',
		desc: 'We encourage new brands to order samples prior bulk production to ensure quality and accurate designs.',
	},
	{
		id: 3,
		img: cartTrolley,
		title: 'Low MOQ',
		desc: 'Unlike other apparel suppliers, we have low minimum order quantity to support small brands at initial stages.',
	},
	{
		id: 4,
		img: check,
		title: 'One Stop Solution',
		desc: 'Fabric sourcing, patterns, sizing, logos, customized packaging & much more. All in one clothing factory.',
	},
	{
		id: 5,
		img: quality,
		title: 'Premium Quality',
		desc: 'We offer the highest quality. But do not take our word for it. Order a sample and see for yourself. ',
	},
];

const categoryData = [
	{
		id: 1,
		img: streetwearImg,
		title: 'Streetwear',
		tagline: 'All about the Urban Vibe',
	},
	{
		id: 2,
		img: activewearImg,
		title: 'Activewear',
		tagline: 'Designed to Move You',
	},
	{
		id: 3,
		img: teamwearImg,
		title: 'Teamwear',
		tagline: 'Style in Uniforms',
	},
];

const facts = [
	{
		id: 1,
		img: cart,
		firstHeading: '30',
		secHeading: 'MOQ',
	},
	{
		id: 2,
		img: time,
		firstHeading: '14 Days',
		secHeading: 'Avg Turn-around',
	},
	{
		id: 3,
		img: clients,
		firstHeading: '100+',
		secHeading: 'Happy Clients',
	},
];

const faq = [
	{
		id: 1,
		question: 'Can I order a Sample?',
		answer:
			'Yes, we understand that you may want to check the quality of stitching or sublimation & feel the quality of the fabric. It generally takes us one week to manufacture an article and three to four days to get it delivered to you.',
	},
	{
		id: 2,
		question: 'What Is The Turnaround Time For Custom Articles?',
		answer:
			'Our Standard turnaround time is two weeks for 100 to 500 pieces, excluding shipping time. We may need three weeks for some articles.',
	},
	{
		id: 3,
		question: 'What Is The Minimum Order Quantity (MOQ) Per Article?',
		answer: 'The minimum Order Quantity is 50 per article or set.',
	},
	{
		id: 4,
		question: 'Where Can We Ship To?',
		answer: 'We can ship anywhere worldwide, including the USA, Canada, UK, Europe & Australia.',
	},
	{
		id: 5,
		question: 'What Payment Methods Do You Accept?',
		answer:
			'Our preferred payment method is a wire transfer to our bank account. However, we accept payments through Western Union, MoneyGram, Xoom, and other hassle-free payment services.',
	},
];

const figures = [
	{
		id: 1,
		number: '100+',
		title: 'Satisfied Customers',
	},
	{
		id: 2,
		number: '500+',
		title: 'Orders Completed',
	},
	{
		id: 3,
		number: '20000+',
		title: 'Clothes Produced',
	},
];

const Home = () => {
	// state for toggling FAQ accordian
	const [open, setOpen] = useState(null);
	//const [isLoading, setIsLoading] = useState(true);
	const handleToggle = (i) => {
		setOpen(open === i ? null : i);
	};
	/*
	const handleLoading = () => {
		setIsLoading(false);
	};

	useEffect(() => {
		window.addEventListener('load', handleLoading);
		return () => window.removeEventListener('load', handleLoading);
	}, []);
*/
	return (
		<div className=" bg-gray-100  h-full w-full overflow-hidden">
			<div className="relative bg-gray-50">
				<img src={cover} alt="" className="w-full h-screen shadow-sm object-cover" />
				<div className=" absolute top-1/2 -translate-y-1/2 left-0 right-0  text-center font-semibold md:tracking-widest">
					<div className="z-40">
						<h2 className=" text-gray-100 bg-red-800 text-lg md:text-3xl md:my-2 py-3 font-semibold"> #1 CLOTHING MANUFACTURER</h2>
					</div>
				</div>
			</div>
			<div className="hidden bg-gray-50 pt-10 text-center flex flex-col">
				<span className=" text-xl md:text-2xl font-semibold">
					{' '}
					Casual, Fitness, Sports Apparels & many more <span className="text-2xl text-lightRed">+</span>{' '}
				</span>

				<button className="px-3 py-2 my-8 mx-auto rounded-md bg-lightRed text-gray-100 text-md font-semibold hover:bg-red-800 shadow-stone-700/20 transition-all ">
					Get Quote
				</button>
			</div>

			<div class=" h-full p-6 bg-red-800">
				<motion.div
					initial={{ opacity: 0, y: 100 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.9 }}
					viewport={{ once: true }}
					class="hide-card flex flex-col items-center justify-center text-center text-gray-100  px-3"
				>
					<h2 class="text-2xl font-semibold my-2">ABOUT OUR COMPANY</h2>

					<p class="md:w-9/12">
						We specialize in creating high-quality, custom-made garments for businesses in the sports, streetwear, and fitness apparel
						industries. Our mission is to help you stand out from the competition by providing you with unique, stylish, and functional
						apparel that is tailored to your specific needs and brand image. With our team of experienced designers and skilled craftsmen,
						we are able to bring your vision to life, using only the highest quality fabrics and materials. From sports team uniforms to
						branded streetwear, we offer a wide range of customization options to ensure that your clothing reflects your brand and meets
						your customers' needs. So whether you're a sports club, streetwear brand, or fitness apparel brand, we are here to help you take
						your business to the next level.
					</p>
					<div class="flex items-center justify-center my-6 md:w-8/12">
						<span>
							<img src={grow} alt="" className="w-16 h-16 " />
						</span>
						<span class="font-semibold text-2xl ml-3">Grow your brand with Pentago</span>
					</div>
				</motion.div>
				<div class=" h-full w-11/12 mx-auto space-y-8 md:space-y-0 bg-gray-100 py-8 md:py-16 text-center font-normal flex flex-col items-center justify-center rounded-xl shadow-xl md:flex-row md:justify-evenly z-30">
					{figures.map((el) => {
						return (
							<motion.div
								key={el.id}
								class="hide-card flex flex-col items-center justify-center pb-3 border-b-2 border-lightRed"
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								transition={{ duration: 0.9 }}
								viewport={{ once: true }}
							>
								<span class="text-4xl mb-1">{el.number} </span>
								<span class="text-lg">{el.title}</span>
							</motion.div>
						);
					})}
				</div>
			</div>

			<div className="relative mx-auto flex flex-col justify-center px-4  bg-gray-50">
				<span className=" my-8 text-2xl font-semibold md:text-center">
					{' '}
					<span className="text-darkGray">Looking for the Best Manufacturer?</span> <br />{' '}
					<span className="text-lightRed"> Here's how we can help.</span>{' '}
				</span>
				<div className="md:flex md:flex-wrap w-full h-full justify-center z-30 ">
					{homeData.map((el) => {
						return (
							<motion.div
								className="mx-auto mt-4 flex justify-center items-start w-full p-3 md:w-80 md:py-6 md:m-6  md:border-0 md:rounded-lg md:shadow-md md:shadow-stone-700/20"
								key={el.id}
								initial={{ opacity: 0, y: 100 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 1 }}
								viewport={{ once: true }}
							>
								<div class="relative mr-1">
									<img src={el.img} alt="" class="h-7 w-7 z-30" />
									<span class="absolute inset-0 h-12 w-12 bg-darkRed rounded-full  mix-blend-multiply filter blur-md opacity-50 animate-smallBlob z-20"></span>
								</div>
								<div className="flex flex-col items-start w-10/12 px-4 md:px-2 ">
									<h2 className=" text-lightRed text-xl font-semibold mb-2">{el.title}</h2>
									<p className="text-md font-medium">
										{' '}
										<span className="text-darkGray"> {el.desc} </span>{' '}
									</p>
								</div>
							</motion.div>
						);
					})}
				</div>
			</div>

			<div>
				<div className="relative h-full w-full flex flex-col bg-gray-50  py-8 ">
					<span className="my-8 px-4 md:text-center text-2xl font-semibold lg:text-3xl">
						{' '}
						<span className="text-darkGray"> Our Products range </span> <br /> <span className="text-lightRed"> shows our diversity</span>{' '}
					</span>
					<div className="md:flex md:flex-wrap justify-center">
						{categoryData.map((el) => {
							return (
								<motion.div
									key={el.id}
									className="my-8 w-64 h-64 md:w-80 md:h-80 mx-auto rounded-lg drop-shadow-lg md:m-3 md:flex md:flex-col md:justify-center md:items-center"
									initial={{ opacity: 0, y: 100 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 1 }}
									viewport={{ once: true }}
								>
									<div className="relative">
										<img
											src={el.img}
											className=" h-full w-full object-cover object-center duration-300 cursor-pointer rounded-lg"
											loading="lazy"
										/>

										<div className="absolute backdrop-blur-md bg-white/30  bottom-0 right-0 left-0 flex justify-evenly w-full py-2 px-2 rounded-xl items-center cursor-pointer">
											<div className="text-darkGray leading-4">
												<h2 className="text-md font-semibold md:text-md lg:text-lg">{el.title}</h2>
												<span className="text-xs md:text-sm">{el.tagline}</span>
											</div>
											<span className="text-lightRed text-lg md:text-xl">
												{' '}
												<FaArrowCircleRight />{' '}
											</span>
										</div>
									</div>
								</motion.div>
							);
						})}
					</div>
				</div>

				<div className=" bg-gray-50 text-center font-semibold py-8">
					{' '}
					<span className="text-darkGray text-lg md:text-xl">
						{' '}
						Like what you see? <br /> Get in touch and place an order!{' '}
					</span>{' '}
					<br />{' '}
					<button className="bg-lightRed text-gray-100 py-3 px-6 my-6 rounded-full text-sm font-semibold hover:bg-red-800 transition-all duration-300 cursor-pointer">
						Order Sample
					</button>
				</div>
			</div>

			<div className=" relative h-full w-full flex flex-col bg-gray-50">
				<span className="my-2 px-4 text-2xl font-semibold lg:text-3xl md:text-center z-30">
					{' '}
					<span className="text-darkGray">Interesting Facts</span> <br /> <span className="text-lightRed"> about Pentago</span>{' '}
				</span>
				<div className="md:flex md:flex-wrap w-full h-full justify-center items-center">
					{facts.map((el) => {
						return (
							<div className="w-full border-b  border-gray-200 md:border-0 flex flex-col justify-center items-center my-3 py-4 md:w-56 md:m-4">
								<img src={el.img} className="red w-8 mb-3" />
								<div className="text-darkGray text-lg font-semibold flex flex-col w-full text-center leading-5">
									<span>
										{el.firstHeading} <br /> {el.secHeading}
									</span>
								</div>
							</div>
						);
					})}
				</div>
			</div>

			<div className="relative h-full w-full flex flex-col bg-gray-50 py-8 px-2">
				<span className="px-4 my-4 text-2xl font-semibold lg:text-3xl md:text-center">
					{' '}
					<span className="text-darkGray">Frequently Asked</span> <br /> <span className="text-lightRed"> Questions (FAQ)</span>{' '}
				</span>
				{faq.map((el) => {
					return (
						<div
							className="z-30 h-full px-4 py-4 my-3 border-b border-gray-300 md:w-7/12 md:mx-auto"
							key={el.id}
							onClick={() => handleToggle(el.id)}
						>
							<div className="h-3 text-sm md:text-md font-medium flex flex-col items-center justify-center ">
								<div className={`w-full flex justify-between items-center text-darkGray}`}>
									<p className="">{el.question} </p>
									<span className=" font-bold ">{open === el.id ? <FaAngleUp /> : <FaAngleDown />}</span>
								</div>
							</div>
							<p className={`mt-8 py-3 text-darkGray text-sm md:text-md  ${open === el.id ? 'block' : 'hidden'}`}>{el.answer}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Home;
