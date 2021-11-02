import React from 'react';
import './App.css';
import MyProvider from './context/MyProvider';
import Header from './components/Header';
import Section from './components/Section';

const App = () => {
  return (
    <MyProvider>
    <main>
     <Header />
     <Section />
    </main>
    </MyProvider>
  );
}

export default App;

