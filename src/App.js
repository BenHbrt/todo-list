import './App.scss';
import './Global.scss';

import { useState, createContext } from 'react';

import Header from './components/Header';

export const DisplayContext = createContext();

function App() {


  const [displaySelect, setDisplaySelect] = useState("calendar");

  return (
    <div className="App">
      <DisplayContext.Provider value={[displaySelect, setDisplaySelect]}>
        <Header />
      </DisplayContext.Provider>
    </div>
  );
}

export default App;
