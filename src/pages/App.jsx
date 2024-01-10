import Contact from '../components/Contact';
import Review from '../components/Review';
import Price from '../components/Price';
import BookCart from '../components/BookCart';
import Main from '../components/Main';
import Intro from '../components/Intro';
function App() {
  return (
    <div className="App">
      <Main />
      <Intro/>
      <BookCart />
      <Review />
      <Price />
      <Contact />

    </div>
  );
}

export default App;
