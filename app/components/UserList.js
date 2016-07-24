import React from 'react';
import User from './User.js';
import UserSearch from './UserSearch.js';
import ReactMixin from 'react-mixin';
import ReactFireMixin from 'reactfire';

export default class UserList extends React.Component {
    constructor() {
        super();

        this.state = {
            users: []
        }
    }

    componentDidMount() {
        this.bindAsArray(firebase.database().ref().child('users'), 'users');
    }

    render() {
        return (
            <div className="user-list" id="user-list">
                <UserSearch />
                <ul className="list">
                {
                    this.state.users.map((user,index) => {
                       return <User key={index} img={user.img} name={user.name} status={user.status} id={user['.key']}  />
                    })

                }
                </ul>
            </div>
        )
    }
}

ReactMixin(UserList.prototype, ReactFireMixin);

