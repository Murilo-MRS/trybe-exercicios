import React, { Component } from 'react'
import User from './components/User';

class App extends Component {
  state = {
    results: undefined,
    loading: true,
  }
  
  fetchUser =  () => {
    this.setState({
      loading: true,
    },async () => {
      const requestUser = await fetch('https://api.randomuser.me/');
      const requestArray = await requestUser.json();
      this.setState({
        results: requestArray,
        loading: false,
      })
    })
  }

  componentDidMount () {
    this.fetchUser();
  }

  render () {
    const { loading, results } = this.state;
    const loadingElement  = 'Carregando...';

    return (
      <div>
        { loading
            ? loadingElement
            : <User results={results}/>
        }
      </div>
    );
  }

};

export default App;