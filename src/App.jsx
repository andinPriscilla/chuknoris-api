import React from 'react';
import './App.css';
import MyProvider from './context/MyProvider';
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';

const App = () => {
  return (
    <MyProvider>
    <main>
     <Header />
     <Section />
     <Footer />
    </main>
    </MyProvider>
  );
}

export default App;

