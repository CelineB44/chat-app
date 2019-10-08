import React from 'react';
import Contact from './components/Contact';

import './App.css';

function App() {
  return (
    <div className="App">
      
      <Contact avatar="https://i.etsystatic.com/15080126/r/il/fdce70/1602228255/il_794xN.1602228255_657k.jpg" name="Luigi Roger" online />
      <Contact avatar="http://www.wtt.biz/Files/108580/Img/14/65NIN042.jpg" name="Mario Roger" offline />
      <Contact avatar="http://ekladata.com/mHlgYo4lrjo1hoHUiW7mCUY59uc.png" name="Peach Pitch" online />
   
    </div>
  );
}

export default App;
