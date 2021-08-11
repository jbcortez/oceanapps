import * as React from 'react';
import Nav from '../components/Nav';
import Hero from '../sections/Hero';
import Products from '../sections/Products';
import Cards from '../sections/Cards';
import About from '../sections/About';
import Footer from '../sections/Footer';
import Support from '../sections/Support';
import Demo from '../sections/Demo';
import '../styles/main.scss';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { AppProvider } from '../contexts/AppContext';

const Index = () => {
  const matches = useMediaQuery('(min-width:1140px)');

  return (
    <AppProvider>
      <div>
        <div className='bg-container'>
          <Nav matches={matches} />
          <main>
            <Hero matches={matches} />
            <Products matches={matches} />
            <Cards />
            <Demo matches={matches} />
            <About matches={matches} />
            <Support />
          </main>
          <Footer />
        </div>
      </div>
    </AppProvider>
  );
};

export default Index;
