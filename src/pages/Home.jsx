import React, { useState, useEffect } from 'react';
import { FaArrowCircleRight, FaAngleDown, FaAngleUp, FaEnvelopeOpen, FaWhatsapp, FaMapMarkerAlt, FaPlus } from 'react-icons/fa';
import streetwearImg from './../images/streetwear.jpg';
import activewearImg from './../images/activewear.jpg';
import teamwearImg from './../images/teamwear.jpg';
import cart from './../assets/cart.svg';
import time from './../assets/time.svg';
import clients from './../assets/clients.svg';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import coverOne from './../images/cover-one.jpg';
import coverTwo from './../images/cover-two.jpg';
import orderIcon from './../images/orderIcon.png';
import samplingIcon from './../images/samplingIcon.png';
import pictureIcon from './../images/pictureIcon.png';
import shippingIcon from './../images/shippingIcon.png';
import hoodieImg from './../images/hoodie-nas.jpg';
import trouserImg from './../images/trouser-nas.jpg';
import shirtImg from './../images/shirt-nas.jpg';
import sweatImg from './../images/sweat-nas.jpg';
import fullsleeveImg from './../images/fullsleeve-nas.jpg';
import halfsleeveImg from './../images/halfsleeve-nas.jpg';
import shortsImg from './../images/shorts-nas.jpg';
import tracksuitimg from './../images/tracksuit-nas.jpg';

const processData = [
	{
		id: 1,
		img: orderIcon,
		title: 'ORDER PLACEMENT',
		desc: 'Start your own brand with fully custom clothing line',
	},
	{
		id: 2,
		img: samplingIcon,
		title: 'ORDER SUMMARY & SAMPLING',
		desc: 'We will provide you detail guidance about your designs and styles',
	},
	{
		id: 3,
		img: pictureIcon,
		title: 'PICTURE/VIDEO OF PRODUCTION',
		desc: 'You will get all updates with pictures & videps of your order',
	},
	{
		id: 4,
		img: shippingIcon,
		title: 'SHIPPING',
		desc: 'Once shipped you will get tracking number to track your order',
	},
];

const streetwearCategories = [
	{
		id: 1,
		img: hoodieImg,
	},
	{
		id: 2,
		img: trouserImg,
	},
	{
		id: 3,
		img: shirtImg,
	},
	{
		id: 4,
		img: sweatImg,
	},
];

const sportswearCategories = [
	{
		id: 1,
		img: fullsleeveImg,
	},
	{
		id: 2,
		img: halfsleeveImg,
	},
	{
		id: 3,
		img: shortsImg,
	},
	{
		id: 4,
		img: tracksuitimg,
	},
];

const facts = [
	{
		id: 1,
		img: cart,
		firstHeading: '50',
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

	return (
		<div className=" bg-gray-100  h-full w-full overflow-hidden">
			<div className="flex">
				<img src={coverOne} alt="" className="w-1/2" />
				<img src={coverTwo} alt="" className="w-1/2" />
			</div>
			<motion.div
				initial={{ opacity: 0, y: 100 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.9 }}
				viewport={{ once: true }}
				className="flex flex-col  md:flex-row py-28 px-8 md:px-16  items-center md:items-end space-y-8 md:space-y-0 "
			>
				<h1 className="text-3xl md:text-6xl font-normal md:w-1/2 text-stone-700 font-raleway">
					World Class Clothing <br /> Manufacturer with <br /> Impeccable Quality
				</h1>
				<div className=" flex flex-col items-end space-y-3 h-full w-1/2 ">
					<Link to="/products">
						<button className="font-montserrat w-32 md:w-40 py-3 md:py-5 border-2 rounded-md border-stone-500 text-stone-600 text-sm md:text-lg font-semibold">
							{' '}
							Our Products{' '}
						</button>
					</Link>
					<Link to="/customorder">
						<button className=" font-montserrat w-40 md:w-56 py-3 md:py-5 rounded-md bg-orange-500 text-white text-sm md:text-lg font-semibold hover:bg-orange-600">
							{' '}
							Order Samples{' '}
						</button>
					</Link>
				</div>
			</motion.div>

			<div className="pt-20 pb-28 px-4 md:px-8  font-montserrat flex flex-col items-center justify-evenly md:flex-row gap-8 md:gap-0">
				<span className=" py-2 px-12 border-2 border-orange-500 rounded-lg text-lg md:text-2xl font-semibold text-orange-500">
					ABOUT NASTEX
				</span>
				<p className="w-1/2 text-sm md:text-lg">
					We are a team of highly skilled professionals who have been working in the apparel industry for over 10 years. We have worked with
					some of the biggest brands in the world. Our team has experience in all aspects of the apparel industry, from design to production
					to marketing. <br /> <br /> We are passionate about what we do and take pride in our work. Our goal is to provide you with the
					best possible service at an affordable price. If you're looking for a reliable partner who can help you grow your business, then
					look no further than Nastex!
				</p>
			</div>

			<div className="font-montserrat ">
				<div className="py-10 text-center">
					<span className=" py-2 px-12 border-2 border-orange-500 rounded-lg text-lg md:text-2xl font-semibold text-orange-500">
						OUR PROCESS
					</span>
				</div>
				<div className="flex flex-col  md:flex-row  process-wrapper">
					{processData.map((el) => (
						<div
							key={el.id}
							className={` flex flex-1 flex-col items-center text-center space-y-3 py-16 px-14
						${
							el.id === 1
								? 'bg-[#181818] text-white'
								: el.id === 2
								? 'bg-[#303030] text-white'
								: el.id === 3
								? 'bg-stone-300 text-darkGray'
								: 'bg-orange-300 text-white'
						}
					
					
					
					`}
						>
							<img src={el.img} alt="" className="w-14" />
							<span className="text-xl font-semibold h-20  flex justify-center items-center">{el.title}</span>
							<p className="text-md h-24  flex justify-center items-center">{el.desc}</p>
						</div>
					))}
				</div>
			</div>

			<div className="py-20 px-8 text-center font-montserrat">
				<Link to="/customorder">
					<button className="w-40 md:w-64 py-3 md:py-6 rounded-md bg-orange-500 text-white text-sm md:text-lg font-semibold hover:bg-orange-600">
						{' '}
						GET A QUOTE NOW
					</button>
				</Link>
			</div>

			<div className="font-montserrat py-20 px-8 text-center flex flex-col justify-center items-center gap-8">
				<span className=" py-2 px-12 border-2 border-orange-500 rounded-lg text-lg md:text-2xl font-semibold text-orange-500">
					Casual/Street Wears
				</span>

				<div className="flex flex-col md:flex-row gap-4">
					{streetwearCategories.map((el) => (
						<img src={el.img} alt="" key={el.id} className="h-56 rounded-lg" />
					))}
				</div>
				<Link to="/products">
					<button className=" font-montserrat w-40 md:w-64 py-2 md:py-4 rounded-md bg-orange-500 text-white text-sm md:text-lg font-semibold hover:bg-orange-600">
						{' '}
						View All Street Wears
					</button>
				</Link>
			</div>

			<div className="font-montserrat py-20 px-8 text-center flex flex-col justify-center items-center gap-8">
				<span className=" py-2 px-12 border-2 border-orange-500 rounded-lg text-lg md:text-2xl font-semibold text-orange-500">
					Fitness/Sports Wears
				</span>

				<div className="flex flex-col md:flex-row gap-4">
					{sportswearCategories.map((el) => (
						<img src={el.img} alt="" key={el.id} className="h-56 rounded-lg" />
					))}
				</div>
				<Link to="/products">
					<button className="font-montserrat w-56 md:w-64 py-2 md:py-4 rounded-md bg-orange-500 text-white text-sm md:text-lg font-semibold hover:bg-orange-600">
						{' '}
						View All Sports Wears
					</button>
				</Link>
			</div>

			<div className="relative h-full w-full flex flex-col items-center  py-8 px-2">
				<motion.span
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 1 }}
					viewport={{ once: true }}
					className=" font-montserrat mb-3 py-2 px-12 border-2 border-orange-500 rounded-lg text-lg md:text-2xl font-semibold text-orange-500"
				>
					Frequently Asked Questions - FAQ
				</motion.span>
				{faq.map((el) => {
					return (
						<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ duration: 1.4 }}
							viewport={{ once: true }}
							className="z-30 h-full px-4 py-4 my-3 border-b-2 border-orange-500 w-full md:w-7/12 md:mx-auto"
							key={el.id}
							onClick={() => handleToggle(el.id)}
						>
							<div className="h-3 text-sm md:text-md font-medium flex flex-col items-center justify-center ">
								<div className={`w-full flex justify-between items-center text-darkGray}`}>
									<p className="font-montserrat">{el.question} </p>
									<span className=" font-bold ">{open === el.id ? <FaAngleUp /> : <FaAngleDown />}</span>
								</div>
							</div>
							<p className={` font-montserrat mt-8 py-3 text-darkGray text-sm md:text-md  ${open === el.id ? 'block' : 'hidden'}`}>
								{el.answer}
							</p>
						</motion.div>
					);
				})}
			</div>
		</div>
	);
};

export default Home;
