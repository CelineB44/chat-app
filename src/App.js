import React from 'react';
import Contact from './components/Contact';

import './App.css';

function App() {
  return (
    <div className="App">
      
      <Contact avatar="https://randomuser.me/api/portraits/women/2.jpg" name="Salvi Roger" online />
      <Contact avatar="https://randomuser.me/api/portraits/women/28.jpg" name="Berenice Robert" offline />
      <Contact avatar="https://randomuser.me/api/portraits/men/86.jpg" name="José Pitch" online />
   
    </div>
  );
}

export default App;
