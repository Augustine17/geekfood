import { Navbar } from './Components/Navbar/Navbar';
import { HeroBanner } from './Components/HeroBanner/HeroBanner';
import { Content } from './Components/Content/Content';
import { CustomerTestimonials } from './Components/CustomerTestimonials/CustomerTestimonials';
import { Footer } from './Components/Footer/Footer';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <HeroBanner />
      <Content />
      <CustomerTestimonials />
      <Footer />
    </>
  );
}

export default App;
