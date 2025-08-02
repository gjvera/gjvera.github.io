import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";

const App = () => {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route element={<Home />} path="/" />
				<Route element={<div>FooBar</div>} path="/foo" />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
};

export default App;
