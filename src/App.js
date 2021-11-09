import './App.css';
import './style/Countdown.css';
import Countdown from './components/Countdown';
import CountdownHooks from './components/CountdownHooks';
import Fireworks3 from './components/Fireworks3/Fireworks3';
import { useState } from 'react';

function App() {
  const[ endCountdown,setEndCountdown] = useState(false)
  return (
    <div className="App-container">
      <header className="App-header">
        <h1>It's about to happen</h1>
      </header>
      <div className="content">
        {/* <Countdown date='2020-12-24T00:00:00' /> */}
        <CountdownHooks setEndCountdown={setEndCountdown} date={'Nov 8, 2022 23:32:00'} />
        {/* Adding some Fireworks to celebrate your Birthday */}
        {endCountdown ? <Fireworks3 /> : null}
      </div>
    </div>
  );
}

export default App;