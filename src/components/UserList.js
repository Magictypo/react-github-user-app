import React from "react";
import User from "./User";

class UserList extends React.Component {

    render() {
        const listUser = this.props.users.map((user) =>
            <User key={ user.id } user={ user } />
        );

        return <div>
            <ul className="user-list">{ listUser }</ul>
        </div>;
    }
}

export default UserList;
