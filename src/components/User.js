import React from "react";

class User extends React.Component {

    render() {
        return <div>
            <li className="list-group-item">
                { this.props.user.login }
                <button className="btn btn-sm btn-primary float-right rounded-circle">X</button>
            </li>
        </div>
    }
}

export default User;
