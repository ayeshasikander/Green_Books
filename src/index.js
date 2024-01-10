import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Collection from './pages/Collection';
import App from './pages/App';
import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";
import AboutPage from './pages/AboutPage';
import BookDetail from './components/BookDetail';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route exact path='/' element={<App />} />
      <Route exact path='/aboutUs' element={<AboutPage />} />
      <Route exact path='/bookCollection' element={<Collection />} />
      <Route exact path='/bookDetail' element={<BookDetail />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);


