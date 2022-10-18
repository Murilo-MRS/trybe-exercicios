import PropTypes from "prop-types"
import React, { useState } from 'react';
import AppContext from './FormContext';

function Provider({ children }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [location, setLocation] = useState('');
  const [module, setModule] = useState();
  const [data, setData] = useState([]);

  const addData = (personalInfo) => {
    setData(data.concat(personalInfo));
  };

  const contextValue = {
    name,
    setName,
    age,
    setAge,
    location,
    setLocation,
    module,
    setModule,
    data,
    setData,
    addData,
  };

  return (
    <AppContext.Provider value={ contextValue }>
      {children}
    </AppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Provider;