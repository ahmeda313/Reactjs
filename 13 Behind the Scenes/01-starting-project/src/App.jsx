import { useState } from 'react';

import Counter from './components/Counter/Counter.jsx';
import ConfigureCounter from './components/Counter/ConfigureCounter.jsx';
import Header from './components/Header.jsx';
import { log } from './log.js';

// useState value cannot be reinitialised or changed using useState() u need to setState()
// rerender !== dismount and remount

function App() {
  log('<App /> rendered');

  const [chosenCount, setChosenCount] = useState(0);
  console.log(chosenCount)
  function handleSetChosenCount(val){
    setChosenCount(val)
  }

  return (
    <>
      <Header />
      <main>
      <ConfigureCounter onSet={handleSetChosenCount}/>
        <Counter key={chosenCount} initialCount={chosenCount} />
        {/* <Counter initialCount={0} /> */}
      </main>
    </>
  );
}

export default App;
