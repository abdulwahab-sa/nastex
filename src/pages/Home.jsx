import React, { useState } from 'react';
import { FaArrowCircleRight, FaAngleDown, FaAngleUp, FaEnvelopeOpen, FaWhatsapp, FaMapMarkerAlt, FaPlus } from 'react-icons/fa';
import coverImg from './../images/cover.jpg';
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
import blobImg from './../images/blob-scene.svg';
import cartTrolley from './../assets/cart-trolley.svg';
import check from './../assets/check.svg';
import order from './../assets/order.svg';
import tshirt from './../assets/tshirt.svg';
import quality from './../assets/quality.svg';
import grow from './../assets/grow.svg';
import cover from './../images/cover5.jpg';

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
		<div className=" bg-gray-100  h-full w-full overflow-hidden">
			{/* 
			<div className="home-message bg-stone-800 h-full w-72 px-4 pb-8 pt-2 text-center mx-auto flex flex-col mb-4 mt-32 rounded-xl relative lg:w-2/4">
				<span className="text-lightRed text-xl font-semibold my-2">WE UNDERSTAND</span>

				<span className="text-gray-200 text-lg font-semibold mb-16 ">
					Finding a good apparel manufacturer can be tough. Here's how we can help.{' '}
				</span>
			</div>

			*/}
			<div className="relative bg-gray-50">
				<img src={cover} alt="" className="w-full h-full shadow-xl object-cover" />
				<div className=" absolute flex flex-col  top-1/2 -translate-y-1/2 left-1/4 -translate-x-1/4 text-center font-semibold md:tracking-widest">
					<h2 className="  text-darkGray text-lg md:text-5xl"># 1</h2>
					<h2 className=" text-gray-100 bg-lightRed rounded-md text-lg md:text-3xl md:my-2 md:py-2">CLOTHING</h2>
					<h2 className=" text-darkGray text-lg md:text-3xl"> MANUFACTURER</h2>

					{/* <div class="absolute inset-0 h-full w-full bg-lightRed rounded-full mix-blend-color-dodge blur-lg animate-smallBlob z-20"></div>*/}
				</div>

				{/* 
				
				<div className="md:absolute md:top-3/4 md:-translate-y-3/4 md:left-1/4 md:-translate-x-1/2  md:w-1/2">
					<div className="relative text-center mt-8 text-darkGray ">
						{' '}
						<span className=" text-2xl md:text-xl font-semibold leading-2">
							{' '}
							Casual, Fitness, Sports Apparels & many more <span className="text-2xl text-lightRed">+</span>{' '}
						</span>
						<div class="absolute inset-0 h-full w-full bg-red-300 rounded-full  mix-blend-multiply filter blur-md opacity-50 animate-smallBlob z-20"></div>
					</div>
					<div className="text-center mt-2">
						<button className="px-3 py-2 my-8 mx-auto rounded-md bg-lightRed text-gray-100 text-md font-semibold hover:bg-darkRed shadow-stone-700/20 transition-all ">
							Get Quote
						</button>
					</div>
				</div>
				*/}
				{/* 
				<div class="custom-shape-divider-bottom-1679569951">
					<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
						<path
							d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
							class="fill-gray-100"
						></path>
					</svg>
				</div>
				*/}
			</div>
			<div className="bg-gray-50 pt-10 text-center flex flex-col">
				<span className=" text-xl md:text-2xl font-semibold">
					{' '}
					Casual, Fitness, Sports Apparels & many more <span className="text-2xl text-lightRed">+</span>{' '}
				</span>

				<button className="px-3 py-2 my-8 mx-auto rounded-md bg-lightRed text-gray-100 text-md font-semibold hover:bg-red-800 shadow-stone-700/20 transition-all ">
					Get Quote
				</button>
			</div>

			<div class=" h-full p-6 bg-darkRed">
				<div class="hide-card flex flex-col items-center justify-center text-center text-gray-100  px-3">
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
					<div class="flex items-start justify-center my-6 md:w-8/12">
						<span>
							<img src={grow} alt="" className="w-16 h-16 " />
						</span>
						<span class="font-semibold text-2xl ml-3">Grow your brand with Pentago Mfg Corp</span>
					</div>
				</div>
				<div class=" h-full w-11/12 mx-auto bg-gray-100 py-8 text-center font-normal flex flex-col items-center justify-center rounded-xl shadow-xl md:flex-row md:justify-evenly z-30">
					<div class="hide-card flex flex-col items-center justify-center pb-3 border-b-2 border-lightRed">
						<span class="text-4xl mb-1">100+ </span>
						<span class="text-lg">
							Satisfied <br />
							Customers
						</span>
					</div>
					<div class="hide-card flex flex-col items-center justify-center my-8 pb-3 border-b-2 border-lightRed">
						<span class="text-4xl mb-1">500+ </span>
						<span class="text-lg">
							{' '}
							Orders <br />
							Completed
						</span>
					</div>
					<div class="hide-card flex flex-col items-center justify-center pb-3 border-b-2 border-lightRed">
						<span class="text-4xl mb-1">20000+ </span>
						<span class="text-lg">
							{' '}
							Clothes <br />
							Produced
						</span>
					</div>
				</div>
			</div>

			<div className="relative mx-auto flex flex-col justify-center px-4  bg-gray-50">
				<div className="absolute h-44 w-44 top-1/4 bottom-0 -left-20  bg-darkRed rounded-xl opacity-20 rotate-45  "></div>
				<div className="absolute h-44 w-44 top-3/4 bottom-0 -right-20  bg-darkRed rounded-xl opacity-20 -rotate-45  "></div>

				<span className=" my-8 text-2xl font-semibold md:text-center">
					{' '}
					<span className="text-darkGray">Looking for the Best Manufacturer?</span> <br />{' '}
					<span className="text-lightRed"> Here's how we can help.</span>{' '}
				</span>
				<div className="md:flex md:flex-wrap w-full h-full justify-center z-30 ">
					{homeData.map((el) => {
						return (
							<div
								className="mx-auto mt-4 flex justify-center items-start w-full p-3 md:w-72 md:m-6  md:border-0 md:rounded-lg md:shadow-md md:shadow-stone-700/20"
								key={el.id}
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
							</div>
						);
					})}
				</div>
			</div>

			<div>
				<div className="relative h-full w-full flex flex-col bg-gray-50  py-8 ">
					<div className="absolute h-44 w-44 top-1/4 bottom-0 -left-20  bg-darkRed rounded-xl opacity-20 rotate-45  "></div>
					<div className="absolute h-44 w-44 top-3/4 bottom-0 -right-20  bg-darkRed rounded-xl opacity-20 -rotate-45  "></div>

					<span className="my-8 px-4 md:text-center text-2xl font-semibold lg:text-3xl">
						{' '}
						<span className="text-darkGray"> Our Products range </span> <br /> <span className="text-lightRed"> shows our diversity</span>{' '}
					</span>
					<div className="md:flex md:flex-wrap justify-center">
						{categoryData.map((el) => {
							return (
								<div
									key={el.id}
									className="my-8 md:w-82 w-64 h-64 mx-auto rounded-lg drop-shadow-lg md:m-3 md:flex md:flex-col md:justify-center md:items-center"
								>
									<div className="relative">
										<img src={el.img} className=" h-full w-full object-cover object-center duration-300 cursor-pointer rounded-lg" />

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
								</div>
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
					<button className="bg-lightRed text-gray-100 py-2 px-4 my-6 rounded-full text-sm hover:bg-red-700 transition-all duration-300 cursor-pointer">
						Order Sample
					</button>
				</div>
			</div>

			<div className=" relative h-full w-full flex flex-col bg-gray-50">
				<div className="absolute h-44 w-44 top-1/4 bottom-0 -left-20  bg-darkRed rounded-xl opacity-20 rotate-45  "></div>
				<div className="absolute h-44 w-44 top-3/4 bottom-0 -right-20  bg-darkRed rounded-xl opacity-20 -rotate-45  "></div>
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
				<div className="absolute h-44 w-44 top-1/4 bottom-0 -left-20  bg-darkRed rounded-xl opacity-20 rotate-45  "></div>
				<div className="absolute h-44 w-44 top-3/4 bottom-0 -right-20  bg-darkRed rounded-xl opacity-20 -rotate-45  "></div>

				<span className="px-4 my-4 text-2xl font-semibold lg:text-3xl md:text-center">
					{' '}
					<span className="text-darkGray">Frequently Asked</span> <br /> <span className="text-lightRed"> Questions (FAQ)</span>{' '}
				</span>
				{faq.map((el) => {
					return (
						<div
							className="z-30 h-full  px-4 py-4 my-3 border-b border-gray-300 md:w-7/12 md:mx-auto"
							key={el.id}
							onClick={() => handleToggle(el.id)}
						>
							<div className="h-3 text-sm font-medium flex flex-col items-center justify-center ">
								<div className={`w-full flex justify-between items-center text-base font-medium text-darkGray}`}>
									<p className="">{el.question} </p>
									<span className="text-md font-bold ">{open === el.id ? <FaAngleUp /> : <FaAngleDown />}</span>
								</div>
							</div>
							<p className={`mt-8 py-3 text-darkGray  ${open === el.id ? 'block' : 'hidden'}`}>{el.answer}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Home;
