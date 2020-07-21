import React from 'react';
import LinkHeader from 'http-link-header';

import Spinner from "./Spinner";
import axios from "axios";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      users: [],
      date: new Date(),
      nextLink: null,
      perPage: 5,
    }
    this.handleRefresh = this.handleRefresh.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  componentDidMount() {
    const url = `https://api.github.com/users?per_page=${this.state.perPage}`;
    this.getData(url);
  }

  async getData(url) {
    try {
      this.setState({ isLoading: true });
      const response = await axios.get(url);
      const link = LinkHeader.parse(response.headers.link);
      const nextLink = link.has('rel', 'next') ? link.get('rel', 'next')[0]['uri'] : null;
      this.setState({
        isLoading: false,
        users: response.data,
        nextLink
      })
    } catch (e) {
      console.error(e.message);
    }
  }

  handleRefresh() {
    this.getData(this.state.nextLink);
  }

  handleRemove(event) {
    const index = event.target.value;
    const array = [ ...this.state.users ];
    array.splice(index, 1);
    this.setState({ users: array });
  }

  render() {
    const User = (props) => {
      return <div>
        <li className="list-group-item">
          { props.user.login }
          <button
              value={props.index}
              onClick={this.handleRemove}
              className="btn btn-sm btn-primary float-right rounded-circle">
            X
          </button>
        </li>
      </div>
    }

    const UserList = (props) => {
      const listUser = props.users.map((user, index) =>
          <User key={ user.id } index={index} user={ user } />
      );

      return <div>
        <div className="card" style={{ width: '18rem', margin: '0 auto' }}>
          <div className="card-header">
            Who to Follow
            <button className="btn btn-sm btn-primary float-right" onClick={this.handleRefresh}>Refresh</button>
          </div>
          <ul className="list-group list-group-flush">
            { listUser }
          </ul>
        </div>
      </div>;
    }

    return <div className="App">
      <div className="container py-3">
        <div className="row">
          <div className="col-12">
            <UserList users={ this.state.users } />
            <Spinner isLoading={ this.state.isLoading } />
          </div>
        </div>
      </div>
    </div>
  }

}

export default App;
