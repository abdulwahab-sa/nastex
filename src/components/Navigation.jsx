import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from './../images/pentago.png';
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
	const [mobileToggle, setMobileToggle] = useState(false);

	return (
		<div className="w-full h-full  py-3 flex justify-between items-center relative">
			<div className="px-3 md:p-0 flex justify-center w-1/5">
				<img src={logo} alt="" className="h-12 md:h-14" />
			</div>
			<div className="flex justify-center px-3 md:hidden text-3xl text-darkGray">
				<span onClick={() => setMobileToggle(!mobileToggle)}>{mobileToggle ? <MdNotes /> : <MdDehaze />}</span>
			</div>
			<div
				className={`absolute ${
					mobileToggle ? 'left-0' : '-left-full'
				}  top-20 h-56 w-full bg-stone-100 shadow-xl md:shadow-none md:bg-inherit md:h-full flex flex-col z-50 md:static md:flex-row md:w-6/12 justify-evenly items-center text-sm font-semibold text-stone-600 transition-all`}
			>
				{navItems.map((el) => {
					return (
						<>
							<NavLink
								to={el.to}
								key={el.id}
								onClick={() => setMobileToggle(!mobileToggle)}
								className={({ isActive, isPending }) => (isPending ? 'text-darkGray' : isActive ? 'text-lightRed' : '')}
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
