import { useState } from 'react';
import './App.css';
import { ComposantEnfant1 } from './components/ComposantEnfant1';
import { UserContext } from './user-context';

function App() {

  const [user, setUser] = useState('Titi')

  return (
    <UserContext.Provider value={{user, setUser}} >
      <ComposantEnfant1 />
    </UserContext.Provider>
  );
}

export default App;
