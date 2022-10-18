import React, { useState } from 'react';
import AppContext from './FormContext';

function Provider({ children }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [location, setLocation] = useState('');
  const [module, setModule] = useState();


  const contextValue = {
    name,
    setName,
    age,
    setAge,
    location,
    setLocation,
    module,
    setModule,
  };

  return (
    <AppContext.Provider value={ contextValue }>
      {children}
    </AppContext.Provider>
  );
}

export default Provider;