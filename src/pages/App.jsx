import { useState, useEffect } from 'react';

import Contact from '../components/Contact';
import Review from '../components/Review';
import Price from '../components/Price';
import BookCart from '../components/BookCart';
import Main from '../components/Main';
import Intro from '../components/Intro';
import Service from '../components/Service';
import Loader from './Loader';
function App() {

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 2000);
  }, []);

  return (
    <div className="App">
      {
        loading ? (
          <>
            <Main />
            <Intro />
            <BookCart />
            <Review />
            <Service />
            <Price />
            <Contact />
          </>
        ) : (
          <Loader />
        )
      }

    </div>
  );
}

export default App;
