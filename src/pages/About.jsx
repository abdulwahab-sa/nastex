import React from 'react';
import aboutImg from './../images/about.jpg';
import aboutTwoImg from './../images/aboutTwo.jpg';
import { MdSouthEast } from 'react-icons/md';
import ceo from './../images/ceo-pic.jpeg';

export const About = () => {
	return (
		<div className="mt-14 w-full h-full">
			<div className="px-6">
				<h4 className="text-md md:text-xl font-semibold my-3 text-lightRed">We are Pentago</h4>
				<h2 className="text-md md:text-3xl font-medium text-darkGray">We set out to help your brand</h2>
				<h2 className="text-md md:text-3xl font-medium text-stone-400">with a better way to order</h2>
			</div>
			<div className="my-8 px-3">
				<img src={aboutImg} alt="" className="w-full h-96 object-cover object-center rounded-xl" />
			</div>
			<div className="my-16 px-6 flex flex-col md:flex-row items-start">
				<h2 className="text-2xl md:text-4xl font-medium text-darkGray flex justify-center items-center mb-6 md:m-0 md:w-1/2">
					Our Story <MdSouthEast className=" ml-2 text-darkRed" />
				</h2>
				<div className="w:10/12 md:w-1/2 text-sm">
					<p className="font-medium">
						Our story began when our owner, Aitsam Nasrullah, a passionate entrepreneur with a love for fashion, noticed a gap in the market
						for affordable, customizable clothing. Driven by his vision, Aitsam founded Pentago Mfg Corp, and we have been producing
						high-quality clothing ever since.
					</p>
					<br />
					<p>
						At Pentago, we specialize in three main categories of clothing: streetwear, fitness apparel, and sports wear. We work closely
						with our clients to understand their unique vision and design custom garments that meet their specific needs. From the initial
						concept to the final product, our team of experienced professionals is committed to delivering exceptional service and
						outstanding quality.
					</p>
					<br />
					<p>
						We believe that customization is key to making a lasting impression. Our team is dedicated to providing our clients with unique,
						customized clothing that stands out in the crowd. We take great pride in our work, and we are confident that our clients will
						appreciate the quality and attention to detail that we put into every garment.
					</p>
					<br />
					<p>
						Thank you for choosing Pentago. We look forward to working with you and creating customized clothing that exceeds your
						expectations.
					</p>
				</div>
			</div>
			<div className="flex flex-col items-center">
				<h2 className=" text-2xl md:text-3xl text-darkGray font-medium">
					Message from <span className="text-darkRed">CEO</span>
				</h2>

				<div className="md:w-1/2 w-full flex flex-col items-center">
					<img src={ceo} alt="" className="w-40 h-40 object-cover object-top rounded-full mt-8 mb-2" />
					<h2 className="font-medium text-md text-center">Aistam Nasrullah</h2>
					<h2 className="text-xs md:text-md">
						Founder & CEO, <span className="text-darkRed font-semibold"> Pentago Mfg </span>
					</h2>
				</div>
				<p className="md:w-1/2 w-10/12 text-sm md:text-md mt-3 mb-8">
					"Our mission at Pentago is to design, produce and distribute high-quality clothing that not only meets the needs and preferences
					of our customers, but also reflects our commitment to sustainability and innovation. We strive to create a positive impact on the
					environment and society, by implementing eco-friendly and ethical manufacturing practices, supporting fair labor standards, and
					giving back to the communities we serve."
				</p>
			</div>
		</div>
	);
};
