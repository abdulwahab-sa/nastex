import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/Home';
import { About } from './pages/About';
import Customorder from './pages/Customorder';
import { Contact } from './pages/Contact';
import { ProductContext } from './context/ProductContext';
import { useState, useEffect } from 'react';
import axios from 'axios';

import { useAuthContext } from './hooks/useAuthContext';

function App() {
	const [data, setData] = useState([]);

	const endPoint = 'https://tradecity.herokuapp.com/api/';
	useEffect(() => {
		fetchProducts();
	}, []);

	const fetchProducts = async () => {
		try {
			const productData = await axios.get(endPoint);
			const result = productData.data;

			setData(result);
		} catch (error) {
			console.error(error);
		}
	};
	const { user } = useAuthContext();

	return (
		<BrowserRouter>
			<ProductContext.Provider value={{ data }}>
				<div id="container">
					<div id="main-content">
						<Routes>
							<Route path="/" exact element={<Home />} />
							<Route path="/about" element={<About />} />
							<Route path="/contact" element={<Contact />} />
							<Route path="/customorder" element={<Customorder />} />
						</Routes>
					</div>
				</div>
			</ProductContext.Provider>
		</BrowserRouter>
	);
}

export default App;

{
	/*
							<Route path="/:category" element={<MainCategory />} />
							<Route path="/:category/:subcategory" element={<SubCategory />} />
							<Route path="/:category/:subcategory/:productId" exact element={<ProductDetail />} />

*/
}
