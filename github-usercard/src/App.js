import logo from './logo.svg';
import './App.css';
import React from 'react';
import axios from 'axios';

class App extends React.Component {
  state = {
    username:'',
    followers:[]
  }

  componentDidMount(){
    axios.get('https://api.github.com/users/addybeuch')
      .then(resp=> {
        this.setState({
          ...this.state,
          username: resp.data
        })
      })
    axios.get('https://api.github.com/users/addybeuch/followers')
      .then(resp=> {
        this.setState({
          ...this.state,
          followers: resp.data
        })
      })
  }




render() {
  return (
    <div className='whole'>
      <div className='card'>
        <h1>
          <img className='pic' src={this.state.username.avatar_url} />
        </h1>
        <h1>
            {this.state.username.login}</h1>

        <h2>Followers</h2>
        <p>
          {this.state.followers.map(follower => {
            return(
              <div>{follower.login}</div>
                )
            })}
        </p>
      </div>
    </div>
  );
}
}
export default App;
