import './App.scss';
import './Global.scss';

import { useState, createContext } from 'react';

import Header from './components/Header';
import Calendar from './components/Calendar';

export const DisplayContext = createContext();
export const LightContext = createContext();

const body = document.querySelector('html');

function App() {


  const [displaySelect, setDisplaySelect] = useState("calendar");
  const [isLight, setIsLight] = useState(true);

  if (!isLight) {
    body.classList.add('dark');
  } else {
    body.classList.remove('dark');
  };

  return (
    <div className="App">
      <LightContext.Provider value={[isLight, setIsLight]}>
      <DisplayContext.Provider value={[displaySelect, setDisplaySelect]}>
        <Header />
        {displaySelect === 'calendar' ? <Calendar /> : null}
      </DisplayContext.Provider>
      </LightContext.Provider>
    </div>
  );
}

export default App;
