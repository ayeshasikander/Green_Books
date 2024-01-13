import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Collection from './pages/Collection';
import App from './pages/App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import BookDetail from './components/BookDetail';

const root = ReactDOM.createRoot(document.getElementById('root'));

function RootComponent() {
  const [contentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setContentLoaded(true);
    }, 2000);
  }, []);

  return (
    <BrowserRouter>
      {contentLoaded && <Header />}
      <Routes>
        <Route exact path='/' element={<App />} />
        <Route exact path='/aboutUs' element={<AboutPage />} />
        <Route exact path='/bookCollection' element={<Collection />} />
        <Route exact path='/bookDetail/:id' element={<BookDetail />} />
      </Routes>
      {contentLoaded && <Footer />}
    </BrowserRouter>
  );
}

root.render(<RootComponent />);
