import React, { useState } from 'react';
import { FaFilter, FaAngleLeft } from 'react-icons/fa';
import imgFour from './../images/imgFour.jpg';
import img from './../images/russel.jpg';
import { finalData } from '../data';
import streetwearimg from './../images/streetwear.jpg';

const categories = [
	{
		id: 1,
		title: 'STREETWEAR',
	},
	{
		id: 2,
		title: 'CASUALWEAR',
	},
	{
		id: 3,
		title: 'TEAMWEAR',
	},
];

const images = [
	{ id: 1, image: 'https://source.unsplash.com/random/800x600' },
	{ id: 2, image: 'https://source.unsplash.com/random/600x800' },
	{ id: 3, image: 'https://source.unsplash.com/random/400x600' },
	{ id: 4, image: 'https://source.unsplash.com/random/600x400' },
	{ id: 5, image: 'https://source.unsplash.com/random/800x400' },
	{ id: 6, image: 'https://source.unsplash.com/random/400x800' },
	{ id: 7, image: 'https://source.unsplash.com/random/600x600' },
	{ id: 8, image: 'https://source.unsplash.com/random/400x400' },
	{ id: 9, image: 'https://source.unsplash.com/random/800x800' },
	{ id: 10, image: 'https://source.unsplash.com/random/500x700' },
];

const Products = () => {
	const [products, setProducts] = useState(finalData);

	const handleCategory = (category) => {
		const testArr = finalData.filter((el) => el.mainCategory === category);
		setProducts(testArr);
		console.log(testArr);
	};

	return (
		<div className="w-full h-full bg-gray-50 overflow-hidden">
			<div className="w-full h-full relative">
				<img src={imgFour} className="w-full h-56 object-cover object-bottom" alt="athlete doing exercise wearing fitness clothes" />
				<div className="absolute inset-0 flex items-center justify-center ">
					<h2 className="   text-xl text-neutral-50 font-bold bg-lightRed p-2 rounded-md opacity-90"> OUR PRODUCTS </h2>
				</div>
			</div>
			<div className="p-2 mt-3 flex flex-wrap justify-center">
				{categories.map((el) => {
					return (
						<button
							className="py-2 px-3 m-1 text-darkGray font-semibold text-xs border border-stone-300 rounded-md"
							key={el.id}
							onClick={(e) => handleCategory(el.title)}
						>
							{' '}
							{el.title}{' '}
						</button>
					);
				})}
			</div>
			<div className="p-2 ">
				<button className="w-56 mx-auto text-darkGray text-sm flex p-2 font-medium rounded-md justify-center items-center border border-gray-300">
					{' '}
					<span className="mx-2">
						{' '}
						<FaFilter />{' '}
					</span>{' '}
					Product Filters{' '}
				</button>
			</div>
			<div className="px-4 mt-4 mb-6">
				<input type="text" placeholder="Search products" className="p-2 w-full text-darkGray bg-stone-200 rounded-md focus:outline-none" />
				<select color="red" className="p-2 text-darkGray w-full mt-2 border border-gray-300 rounded-md focus:outline-none">
					<option selected>Choose a subcategory</option>
					<option>Hoodies</option>
					<option>Joggers</option>
					<option>Tracksuits</option>
				</select>
			</div>

			<div className="w-full h-full md:flex md:flex-wrap">
				{products &&
					products.map((el) => {
						return (
							<div className="h-full w-56 bg-neutral-100 shadow-lg mx-auto m-4 p-2 rounded-lg" key={el.id}>
								<img src={el.productImg} alt="" className="h-40 w-full object-cover object-center rounded-lg" />
								<div className="h-full">
									<h2 className="text-darkGray font-semibold mt-2">{el.productName}</h2>
									<h3 className="text-darkGray font-normal text-xs ">{el.mainCategory}</h3>
									<button className="w-full py-2 mt-2  font-semibold text-gray-50 bg-lightRed rounded-xl hover:bg-red-800 transition-all">
										View Product
									</button>
								</div>
							</div>
						);
					})}
			</div>

			{/*
			<div className="h-full w-72 md:w-3/5 md:mb-3 text-darkGray mx-auto border border-stone-300 bg-neutral-100 shadow-2xl">
				<div className=" flex items-center justify-start py-4 px-2 cursor-pointer border-b border-stone-300">
					<FaAngleLeft />
					<span className="text-xs font-medium mx-2"> BACK TO ALL PRODUCTS</span>
				</div>
				<div className="md:flex md:w-full md:h-72">
					<img src={streetwearimg} alt="" className=" w-full h-72 md:h-full  md:w-1/2 object-cover object-center " />
					<div className="h-full p-3 md:overflow-y-auto">
						<h2 className="font-semibold text-xl"> Pullover Hoodie </h2>
						<h3 className="font-medium text-sm"> STREETWEAR</h3>
						<h6 className="text-xs font-medium mt-2"> Article # 01 </h6>
						<p className="my-2 text-sm md:text-xs md:my-4">
							{' '}
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
						</p>
						<button className="py-3 px-2 mt-2 text-xs md:py-2 md:px-2 border border-gray-300 font-semibold text-darkGray rounded-md hover:bg-stone-300 transition-all">
							{' '}
							SEND INQUIRY{' '}
						</button>
					</div>
				</div>
			</div>
		*/}
		</div>
	);
};

export default Products;
