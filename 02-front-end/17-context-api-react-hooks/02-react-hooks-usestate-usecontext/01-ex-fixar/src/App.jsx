
import React from 'react'
import Form from './components/Form';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <Form />
    </Provider>
  )
}

export default App;
