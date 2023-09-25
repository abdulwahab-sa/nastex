import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Customorder from './pages/Customorder';
import { Contact } from './pages/Contact';
import { lazy, Suspense, useLayoutEffect } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
// Lazy loading Components
const Home = lazy(() => import('./pages/Home'));
const Products = lazy(() => import('./pages/Products'));
const About = lazy(() => import('./pages/About').then((module) => ({ default: module.About })));

const ScrollToTop = ({ children }) => {
	const { pathname } = useLocation();
	useLayoutEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);
	return children;
};

function App() {
	return (
		<BrowserRouter>
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
						<ScrollToTop>
							<Routes>
								<Route path="/" exact element={<Home />} />
								<Route path="/products" element={<Products />} />
								<Route path="/about" element={<About />} />
								<Route path="/contact" element={<Contact />} />
								<Route path="/customorder" element={<Customorder />} />
							</Routes>
						</ScrollToTop>
					</Suspense>
				</div>
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
