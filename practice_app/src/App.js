import React, {useState} from 'react';
import Tweet from './Tweet';


function App() {

  const [isRed, setRed] = useState(false);
  const [count, setCount] = useState(0);

  const incriment = () => {
    setCount(count + 1);
    setRed(!isRed)
  };

  const [users, setUsers] = useState([
    {name: 'john', message: 'Hello', likes: 125},
    {name: 'dave', message: 'howdy', likes: 1255},
    {name: 'pete', message: 'sup?', likes: 185}
  ]);

  return(
    <div className='app'>
      {users.map(user => (
        <Tweet name={user.name} message={user.message} likes={user.likes}/>
      ))}
      <h1 className={isRed ? 'red' : ''}>Change my color!</h1>
      <button onClick={incriment}>Incriment</button>
      <h1>{count}</h1>
    </div>
  );
}

export default App;