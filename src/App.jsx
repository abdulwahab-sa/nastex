import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Customorder from './pages/Customorder';
import { Contact } from './pages/Contact';
import { ProductContext } from './context/ProductContext';
import { useState, useEffect, lazy, Suspense } from 'react';
import axios from 'axios';
import { useAuthContext } from './hooks/useAuthContext';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
// Lazy loading Components
const Home = lazy(() => import('./pages/Home'));
const Products = lazy(() => import('./pages/Products'));
const About = lazy(() => import('./pages/About').then((module) => ({ default: module.About })));

function App() {
	const [data, setData] = useState([]);
	{
		/* 
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
*/
	}
	return (
		<BrowserRouter>
			<ProductContext.Provider value={{ data }}>
				<div id="container">
					<Navigation />
					<div id="main-content">
						<Suspense
							fallback={
								<div id="loading">
									<div class="loader"></div>
								</div>
							}
						>
							<Routes>
								<Route path="/" exact element={<Home />} />
								<Route path="/products" element={<Products />} />
								<Route path="/about" element={<About />} />
								<Route path="/contact" element={<Contact />} />
								<Route path="/customorder" element={<Customorder />} />
							</Routes>
						</Suspense>
					</div>
					<Footer />
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
