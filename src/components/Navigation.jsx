import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from './../images/nastex-logo.png';
import { MdNotes, MdDehaze } from 'react-icons/md';

const navItems = [
	{
		id: 1,
		title: 'Home',
		to: '/',
	},
	{
		id: 2,
		title: 'About Us',
		to: '/about',
	},
	{
		id: 3,
		title: 'Products',
		to: '/products',
	},
	{
		id: 4,
		title: 'Custom Order',
		to: '/customorder',
	},
	{
		id: 5,
		title: 'Contact',
		to: '/contact',
	},
];

const Navigation = () => {
	const [mobileToggle, setMobileToggle] = useState(true);

	return (
		<div className="w-full h-full  flex justify-between items-center relative">
			<div className="px-3 md:p-0 flex justify-center w-1/5">
				<img src={logo} alt="" className="h-16 md:h-20" />
			</div>
			<div className="flex justify-center px-3 md:hidden text-3xl text-darkGray">
				<span onClick={() => setMobileToggle(!mobileToggle)}>{mobileToggle ? <MdNotes /> : <MdDehaze />}</span>
			</div>
			<div
				className={`absolute ${
					mobileToggle ? 'left-0' : '-left-full'
				}  top-20 h-56 w-full bg-stone-100 shadow-xl md:shadow-none md:bg-inherit md:h-full flex flex-col z-50 md:static md:flex-row md:w-6/12 justify-evenly items-center text-sm md:text-base font-bold font-montserrat text-stone-500 transition-all`}
			>
				{navItems.map((el) => {
					return (
						<>
							<NavLink
								to={el.to}
								key={el.id}
								onClick={() => setMobileToggle(!mobileToggle)}
								className={({ isActive, isPending }) => (isPending ? 'text-stone-500' : isActive ? 'text-orange-500' : '')}
							>
								{el.title}
							</NavLink>
						</>
					);
				})}
			</div>
		</div>
	);
};

export default Navigation;
