import React from 'react';
import coverImg from './../images/pentago-cover.jpg';
import imgOne from './../images/imgOne.jpg';
import imgTwo from './../images/imgTwo.jpg';
import imgThree from './../images/imgThree.jpg';
import imgFour from './../images/imgFour.jpg';
import imgFive from './../images/imgFive.jpg';

const homeData = [
	{
		id: 1,
		img: imgOne,
		title: 'EASE OF ORDERING',
		descOne: 'We prioritize empathy and effective communication in our work. This approach allows us to deliver a',
		descTwo: 'seamless sourcing experience for your brand, free of any unnecessary difficulties or complications.',
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

const Home = () => {
	return (
		<div className=" bg-stone-900  h-full">
			<div className="  mx-auto flex flex-col justify-center p-4">
				<h2 className="text-gray-200 text-3xl font-semibold text-left">WE BUILD</h2>
				<h2 className="text-red-900 text-3xl font-semibold text-right">YOUR BRAND</h2>
			</div>
			<img src={coverImg} className="home-cover" alt="picture of athlete in gym" />
			<div className="  mx-auto flex flex-col justify-center p-4">
				<span className="text-gray-200 text-3xl font-semibold text-left "> PAKISTAN'S # 1</span>
				<span className="text-red-900 text-3xl font-semibold text-center"> CLOTHING</span>
				<span className="text-gray-200 text-3xl font-semibold text-right"> MANUFACTURER</span>
			</div>
			<div className="home-message bg-stone-800 h-full w-5/6 p-4 text-center mx-auto flex flex-col my-4">
				<span className="text-red-900 text-2xl font-semibold  my-2 ">WE UNDERSTAND.</span>

				<span className="text-gray-200 text-2xl font-semibold mb-16 ">
					Finding a good apparel manufacturer can be tough. Here's how we can help.{' '}
				</span>
			</div>
			<div className="mx-auto flex flex-col justify-center p-4">
				{homeData.map((el) => {
					return (
						<div className="mx-auto my-4 flex flex-col justify-center w-10/12" key={el.id}>
							<img src={el.img} className="my-2 rounded-full" />
							<div className="flex flex-col justify-between text-center">
								<h2 className=" text-white text-2xl font-semibold my-2">{el.title}</h2>
								<p className="text-base font-semibold">
									{' '}
									<span className="text-gray-200"> {el.descOne} </span>
									<span className="text-red-900"> {el.descTwo} </span>{' '}
								</p>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Home;
