import React from 'react';
import Tweet from './Tweet';


function App() {
  return(
    <div className='app'>
      <Tweet name="Dave" message="Random text 1" likes="125"/>
      <Tweet name="Steve" message="Random text 2" likes="1255"/>
      <Tweet name="John" message="Random text 3" likes="12555"/>
      <Tweet name="Boris" message="Random text 4" likes="12554556"/>
    </div>
  );
}

export default App;