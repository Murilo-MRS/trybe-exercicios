import React from "react";

const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}
const compromissos = ['Estudar', 'Assistir aula', 'Praticar'];

class App extends React.Component {
  render() { 
    return (
      <ul className="App">
        {
          compromissos.map((e) => Task(e))
        }
      </ul>
    );
  }
}

export default App;
