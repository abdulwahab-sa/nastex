import React from 'react';
import logo from './../images/pentago_logo.png';
import { Link } from 'react-router-dom';
import { MdLocationOn, MdPhoneEnabled, MdMail } from 'react-icons/md';

const contact = [
	{
		id: 1,
		icon: MdLocationOn,
		statement: 'Hamza Ghous, Sialkot 51310, Pakistan',
	},
	{
		id: 2,
		icon: MdPhoneEnabled,
		statement: '(92)316-7133715',
	},
	{
		id: 3,
		icon: MdMail,
		statement: 'info@pentagomfgcorp.com',
	},
];

const Footer = () => {
	const d = new Date();
	return (
		<div className="w-full h-full">
			<div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:items-start md:space-x-8 md:justify-around p-5 md:py-10 bg-stone-800 border-b border-gray-700 ">
				<div className="max-w-xs">
					<img src={logo} alt="" className="w-10 mb-3" />
					<p className="text-sm font-light text-gray-300">
						{' '}
						We specialize in creating high-quality, custom-made garments for businesses in the sports, streetwear, and fitness apparel
						brands. We offer a wide range of customization options to ensure that your clothing reflects your brand and meets your
						customers' needs.{' '}
					</p>
				</div>
				<div className=" text-gray-300 ">
					<h4 className="mb-2 text-md font-medium"> Useful Links</h4>
					<div className="flex flex-col justify-center text-sm font-light space-y-2">
						<Link to="/about">
							{' '}
							<span> About </span>{' '}
						</Link>
						<Link to="/products">
							{' '}
							<span> Products </span>{' '}
						</Link>
						<Link to="/customorder">
							{' '}
							<span> Custom Order </span>{' '}
						</Link>
						<Link to="/contact">
							{' '}
							<span> Contact </span>{' '}
						</Link>
					</div>
				</div>
				<div className=" text-gray-300  ">
					<h4 className="mb-2 text-md font-medium"> Contact Info</h4>
					<div className="flex flex-col justify-center text-sm font-light space-y-3">
						{contact.map((el) => {
							return (
								<div className="flex items-center space-x-1" key={el.id}>
									<el.icon className="" />
									<span className="">{el.statement}</span>
								</div>
							);
						})}
					</div>
				</div>
			</div>
			<div className="p-2 bg-stone-800 text-gray-300 text-center">
				<span className="text-xs font-normal">Copyright &copy; {d.getFullYear()} | All rights reserved</span>
			</div>
		</div>
	);
};

export default Footer;
