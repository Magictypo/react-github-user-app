import React from 'react';

import GithubSvc from '../services/GithubSvc';
import Spinner from "./Spinner";
import UserList from "./UserList";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      users: [],
      date: new Date()
    }
  }

  componentDidMount() {
    this.getUser();
  }

  async getUser() {
    try {
      this.setState({ isLoading: true });
      const response = await GithubSvc.getUser(5000);
      this.setState({
        isLoading: false,
        users: response.data
      })
    } catch (e) {
      console.error(e.message);
    }
  }

  render() {
    return <div className="App">
      <div className="container py-3">
        <div className="row">
          <div className="col-12">
            <Spinner isLoading={ this.state.isLoading } />
            <UserList users={ this.state.users } />
          </div>
        </div>
      </div>
    </div>
  }

}

export default App;
