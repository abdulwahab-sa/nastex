import React, { useState } from 'react';
import { FaArrowCircleRight, FaAngleDown, FaAngleUp, FaEnvelopeOpen, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';
import coverImg from './../images/pentago-cover.jpg';
import imgOne from './../images/imgOne.jpg';
import imgTwo from './../images/imgTwo.jpg';
import imgThree from './../images/imgThree.jpg';
import imgFour from './../images/imgFour.jpg';
import imgFive from './../images/imgFive.jpg';
import streetwearImg from './../images/streetwear.jpg';
import activewearImg from './../images/activewear.jpg';
import teamwearImg from './../images/teamwear.jpg';
import cart from './../assets/cart.svg';
import time from './../assets/time.svg';
import clients from './../assets/clients.svg';

const homeData = [
	{
		id: 1,
		img: imgOne,
		title: 'EASE OF ORDERING',
		descOne: 'We have created a seamless sourcing experience for your brand,',
		descTwo: ' free of any unnecessary difficulties or complications.',
	},
	{
		id: 2,
		img: imgTwo,
		title: 'SAMPLE & MOCKUPS',
		descOne: 'We encourage new brands to order samples prior bulk production',
		descTwo: 'to ensure quality and accurate designs.',
	},
	{
		id: 3,
		img: imgThree,
		title: 'LOW MOQ',
		descOne: 'Unlike other apparel suppliers, we have',
		descTwo: 'LOW MOQ to support small brands at initial stages.',
	},
	{
		id: 4,
		img: imgFour,
		title: 'ONE STOP SOLUTION',
		descOne: 'Fabric sourcing, patterns, sizing, logos, customized packaging & much more.',
		descTwo: 'All in one clothing factory.',
	},
	{
		id: 5,
		img: imgFive,
		title: 'PREMIUM QUALITY',
		descOne: 'We offer the highest quality. But do not take our word for it.',
		descTwo: 'Order a sample and see for yourself.',
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

const contactCard = [
	{
		id: 1,
		logo: FaEnvelopeOpen,
		title: 'EMAIL ADDRESS',
		desc: 'info@pentagomfgcorp.com',
	},
	{
		id: 2,
		logo: FaWhatsapp,
		title: 'WHATSAPP',
		desc: '(+92)3128230803',
	},
	{
		id: 3,
		logo: FaMapMarkerAlt,
		title: 'LOCATION',
		desc: 'Sialkot, Pakistan',
	},
];

const Home = () => {
	// state for toggling FAQ accordian
	const [open, setOpen] = useState(null);
	const handleToggle = (i) => {
		setOpen(open === i ? null : i);
	};

	return (
		<div className=" bg-stone-900  h-full w-full">
			<div className="relative">
				<img src={coverImg} className="home-cover" alt="picture of athlete in gym" />
				<div className="flex flex-col absolute top-0 bottom-0 align-middle justify-center items-center w-full font-semibold text-xl lg:text-5xl lg:font-bold pointer-events-none">
					<div className=" flex justify-between p-3">
						<h2 className="text-gray-200">WE BUILD </h2>
						<h2 className="text-lightRed ml-3">YOUR BRAND</h2>
					</div>
					<div className=" flex flex-col justify-center text-center p-6 ">
						<span className="text-gray-200 "> PAKISTAN'S # 1</span>
						<span className="text-lightRed"> CLOTHING</span>
						<span className="text-gray-200"> MANUFACTURER</span>
					</div>
				</div>
			</div>
			<div className="w-full relative">
				<div className="custom-shape-divider-top-1678283023">
					<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
						<path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="fill-darkRed"></path>
					</svg>
				</div>
			</div>
			{/* 
			<div className="home-message bg-stone-800 h-full w-72 px-4 pb-8 pt-2 text-center mx-auto flex flex-col mb-4 mt-32 rounded-xl relative lg:w-2/4">
				<span className="text-lightRed text-xl font-semibold my-2">WE UNDERSTAND</span>

				<span className="text-gray-200 text-lg font-semibold mb-16 ">
					Finding a good apparel manufacturer can be tough. Here's how we can help.{' '}
				</span>
			</div>

			*/}

			<div className="mx-auto flex flex-col justify-center p-4">
				<span className=" mt-24 mb-12 text-xl font-semibold border-2 border-purple-600 lg:text-3xl">
					{' '}
					<span className="text-gray-200">Looking for the Best Manufacturer?</span> <br />{' '}
					<span className="text-lightRed"> Here's how we can help.</span>{' '}
				</span>
				<div className="lg:flex lg:flex-wrap w-full h-full justify-center border border-amber-500 ">
					{homeData.map((el) => {
						return (
							<div
								className="mx-auto my-4 flex flex-col justify-center items-center w-full p-3 border-b border-gray-700 lg:w-80 lg:m-6 lg:bg-stone-800 lg:border-0 lg:rounded-lg lg:shadow-md lg:shadow-stone-700/20"
								key={el.id}
							>
								<img src={el.img} className="my-2 rounded-full w-48 h-48 object-cover" />
								<div className="flex flex-col justify-between text-center">
									<h2 className=" text-white text-2xl font-semibold my-2">{el.title}</h2>
									<p className="text-md font-medium">
										{' '}
										<span className="text-gray-200"> {el.descOne} </span>
										<span className="text-lightRed "> {el.descTwo} </span>{' '}
									</p>
								</div>
							</div>
						);
					})}
				</div>
			</div>
			<div>
				<div className="w-full relative">
					<div className="custom-shape-divider-top-1678283023">
						<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
							<path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="fill-darkRed"></path>
						</svg>
					</div>
				</div>
				<div className=" h-full w-full flex flex-col border-2 border-green-600 py-8 ">
					<span className="mt-20 px-4 mb-12 text-xl font-semibold border-2 border-purple-600 lg:text-3xl">
						{' '}
						<span className="text-gray-200"> Our Products range </span> <br /> <span className="text-lightRed"> shows our diversity</span>{' '}
					</span>
					<div className="lg:flex lg:flex-wrap justify-center">
						{categoryData.map((el) => {
							return (
								<div
									key={el.id}
									className="my-8 lg:w-96 lg:h-full lg:border lg:border-pink-700 lg:m-3 lg:flex lg:flex-col lg:justify-center lg:items-center"
								>
									<div className="relative w-48 h-48 my-4 mx-auto border-2 border-blue-500 lg:w-72 lg:h-72 lg:m-4">
										<div className=" h-full">
											<img
												src={el.img}
												className=" h-full absolute -rotate-12 z-30 top-0 bottom-0 left-0 right-0 object-cover object-center hover:rotate-0 transition-all duration-300 cursor-pointer rounded-lg"
											/>
										</div>
										<div className=" h-full absolute z-10 top-0 bottom-0 left-0 right-0 rotate-12 bg-lightRed rounded-lg"></div>
									</div>

									<div className="flex justify-evenly w-56 py-1 px-2 rounded-full border-2 border-lightRed mt-8 mx-auto items-center hover:scale-x-105 transition-all duration-300 cursor-pointer lg:w-72 lg:mt-12 lg:py-2">
										<div className="text-gray-200 leading-4">
											<h2 className="text-sm font-semibold lg:text-lg">{el.title}</h2>
											<span className="text-xs lg:text-sm">{el.tagline}</span>
										</div>
										<span className="text-lightRed text-lg lg:text-xl">
											{' '}
											<FaArrowCircleRight />{' '}
										</span>
									</div>
								</div>
							);
						})}
					</div>
				</div>
				<div className="w-full relative">
					<div className="custom-shape-divider-top-1678283023">
						<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
							<path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="fill-darkRed"></path>
						</svg>
					</div>
				</div>
				<div className=" mt-36 text-center font-semibold border-2 border-purple-600 pb-6">
					{' '}
					<span className="text-gray-200 text-lg lg:text-2xl">
						{' '}
						Like what you see? <br /> Get in touch and place an order!{' '}
					</span>{' '}
					<br />{' '}
					<button className="bg-darkRed text-gray-200 py-2 px-4 my-6 rounded-full text-sm hover:bg-lightRed lg:px-6 lg:py-4 lg:text-lg  transition-all duration-300 cursor-pointer">
						Order Sample
					</button>
				</div>
			</div>
			<div className="w-full relative">
				<div className="custom-shape-divider-top-1678283023">
					<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
						<path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="fill-darkRed"></path>
					</svg>
				</div>
			</div>
			<div className="h-full w-full flex flex-col border-2 border-green-600 py-8 ">
				<span className="mt-32 px-4 mb-12 text-xl lg:text-3xl font-semibold border-2 border-purple-600 lg:mt-24">
					{' '}
					<span className="text-gray-200">Interesting Facts</span> <br /> <span className="text-lightRed"> about Pentago</span>{' '}
				</span>
				<div className="lg:flex lg:flex-wrap w-full h-full justify-center items-center">
					{facts.map((el) => {
						return (
							<div className="w-full border-b border-gray-700 flex flex-col justify-center items-center my-3 py-4 lg:w-72 lg:m-4">
								<img src={el.img} className="red w-16 mb-3" />
								<div className="text-gray-200 text-lg font-medium flex flex-col w-full text-center leading-5">
									<span>
										{el.firstHeading} <br /> {el.secHeading}
									</span>
								</div>
							</div>
						);
					})}
				</div>
			</div>
			<div className="w-full relative">
				<div className="custom-shape-divider-top-1678283023">
					<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
						<path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="fill-darkRed"></path>
					</svg>
				</div>
			</div>
			<div className="mt-32 h-full w-full flex flex-col border-2 border-green-600 py-8 px-2">
				<span className="px-4 mb-12 text-xl lg:text-3xl font-semibold border-2 border-purple-600">
					{' '}
					<span className="text-gray-200">Frequently Asked</span> <br /> <span className="text-lightRed"> Questions (FAQ)</span>{' '}
				</span>
				{faq.map((el) => {
					return (
						<div
							className="h-full bg-stone-800 px-4 py-4 my-3 shadow-md shadow-stone-700/20 lg:w-7/12 lg:mx-auto"
							key={el.id}
							onClick={() => handleToggle(el.id)}
						>
							<div className="h-10  text-md font-medium flex flex-col items-center justify-center ">
								<div className={`w-full flex justify-between items-center ${open === el.id ? 'text-lightRed' : 'text-gray-200'}`}>
									<p className="">{el.question} </p>
									<span className="text-lg font-bold ">{open === el.id ? <FaAngleUp /> : <FaAngleDown />}</span>
								</div>
							</div>
							<p className={`mt-8 border-t border-gray-700 py-3 text-gray-200  ${open === el.id ? 'block' : 'hidden'}`}>{el.answer}</p>
						</div>
					);
				})}
			</div>
			<div className="h-full w-9/12 mx-auto  flex flex-col justify-center items-center lg:flex-row ">
				{contactCard.map((el) => {
					return (
						<div
							className="w-full h-full my-6 flex flex-col items-center justify-center lg:border lg:border-blue-800 lg:w-3/12 lg:mx-2"
							key={el.id}
						>
							<span className="p-4 border border-lightRed text-lightRed text-3xl">
								{' '}
								<el.logo />{' '}
							</span>
							<span className="text-gray-200 text-lg font-semibold mt-3 mb-1"> {el.title} </span>
							<span className="text-gray-200 text-md font-normal"> {el.desc} </span>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Home;
