import React, { Component } from 'react'
import Card from './Card'
import Loading from './Loading'

class User extends Component {
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
            results: requestArray.results[0],
            loading: false,
          })
        })
      }
    
      componentDidMount () {
        this.fetchUser();
      }

      render () {
        const { loading, results } = this.state;
        
        return (
          <div>
            { loading
                ? <Loading />
                : (
                  <Card results={results}/>
                )
            }
          </div>
        );
      }
};

export default User;
