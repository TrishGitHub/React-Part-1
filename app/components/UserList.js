import React from 'react';
import User from './User.js';
import ReactMixin from 'react-mixin';
import ReactFireMixin from 'reactfire';

export default class UserList extends React.Component {
    constructor() {
        super();

        this.state = {
            users: [],
            search: ''
        }
    }

   _userSearch(event){
       this.setState({search: event.target.value.substr(0, 20)});
    }

    componentDidMount() {
        this.bindAsArray(firebase.database().ref().child('users'), 'users');
    }

    render() {
        let filteredUsers = this.state.users.filter(
            (user) => {
                return user.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
            }
        );

        return (
            <div className="user-list" id="user-list">
                <div className="search">
                    <input type="text" placeholder="search" value={this.state.search} onChange={this._userSearch.bind(this)}/>
                    <i className="fa fa-search"></i>
                </div>

                <ul className="list">
                {
                    filteredUsers.map((user,index) => {
                       return <User key={index} img={user.img} name={user.name} status={user.status} id={user['.key']}  />
                    })

                }
                </ul>
            </div>
        )
    }
}

ReactMixin(UserList.prototype, ReactFireMixin);

