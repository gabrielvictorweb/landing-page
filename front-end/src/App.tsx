import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import Home from './pages/home';
import GlobalStyles from './styles/global';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
		<Header />
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />}/>
			</Routes>
		</BrowserRouter>
		<Footer />
		<GlobalStyles />
    </div>
  );
}

export default App;
