import React from "react";
import User from "./User";

class UserList extends React.Component {

    render() {
        const listUser = this.props.users.map((user) =>
            <User key={ user.id } user={ user } />
        );

        return <div>
            <div className="card" style={{ width: '18rem', margin: '0 auto' }}>
                <div className="card-header">
                    Who to Follow
                    <button className="btn btn-sm btn-primary float-right">Refresh</button>
                </div>
                <ul className="list-group list-group-flush">
                    { listUser }
                </ul>
            </div>
        </div>;
    }
}

export default UserList;
