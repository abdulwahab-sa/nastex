import React from 'react';
import { FaFilter } from 'react-icons/fa';
import imgFour from './../images/imgFour.jpg';

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
	const getHeight = () => {
		const min = 100;
		const max = 550;
		return Math.floor(Math.random() * (max - min + 1)) + min;
	};

	return (
		<div className="w-full h-full bg-stone-900">
			<div className="w-full h-full relative">
				<img src={imgFour} className="w-full h-24 object-cover object-bottom" alt="athlete doing exercise wearing fitness clothes" />
				<h2 className="text-xl absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center text-gray-200 font-bold">
					{' '}
					OUR PRODUCTS{' '}
				</h2>
			</div>
			<div className="p-4 mt-3 flex flex-wrap">
				{categories.map((el) => {
					return (
						<span className="py-2 px-3 m-1 rounded-full bg-lightRed text-gray-200 font-semibold text-xs" key={el.id}>
							{' '}
							{el.title}{' '}
						</span>
					);
				})}
				<button className="text-gray-200 text-sm flex flex-1 mt-3 bg-stone-700 p-2 font-medium rounded-md justify-center items-center">
					{' '}
					<span className="mx-2">
						{' '}
						<FaFilter />{' '}
					</span>{' '}
					Product Filters{' '}
				</button>
			</div>
			<div className="px-4 py-1 border border-lightRed">
				<input type="text" placeholder="Search products" className="p-2 bg-stone-700 w-full text-gray-200 focus:outline-none" />
				<select color="red" className="p-2 text-gray-200 bg-stone-700 w-full mt-2 focus:outline-none">
					<option selected>Choose a subcategory</option>
					<option>Hoodies</option>
					<option>Joggers</option>
					<option>Tracksuits</option>
				</select>
			</div>

			<div className="grid grid-cols-2 md:grid-cols-3 grid-rows-3 md:grid-rows-4 gap-4 h-5/6 w-4/5 mx-auto">
				{images.map((image) => (
					<img
						key={image.id}
						src={image.image}
						alt=""
						className="rounded-lg object-cover"
						//style={{ height: `${getHeight()}px` }}
					/>
				))}
			</div>
		</div>
	);
};

export default Products;
